// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, TemplateRef, ViewChild, ElementRef, AfterViewInit, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { fromEvent, Subscription, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LazyListItemTemplateDirective } from '../directives/lazy-list-item-template.directive';

export type LazyListItem = string | { [key: string]: any };

@Component({
  selector: 'app-lazy-list',
  templateUrl: './lazy-list.component.html',
  styleUrls: ['./lazy-list.component.scss']
})
export class LazyListComponent implements OnInit, AfterViewInit, OnDestroy {
  private containerScrollSubscription: Subscription;

  allItems: LazyListItem[];
  itemsToDisplay: LazyListItem[];

  @ViewChild(LazyListItemTemplateDirective, { read: TemplateRef }) itemTemplate: TemplateRef<any>;
  @ViewChild('itemsListContainer') itemsListContainer: ElementRef<HTMLDivElement>;

  @Input() valueField: keyof LazyListItem;
  @Input() textField: keyof LazyListItem;
  @Input() initItemsCount = 100;
  @Input() lazyItemsChunkCount = 20;
  @Input() trackItemBy = (i: number, e: LazyListItem) => btoa(JSON.stringify(e));
  @Input() set items(items: LazyListItem[]) {
    if (items) {
      this.allItems = items;
      this.itemsToDisplay = this.allItems.splice(0, this.initItemsCount);
      this.scrollToTop();
    }
  }

  constructor(private zone: NgZone, private changeRef: ChangeDetectorRef) { }

  private initLazyList() {
    this.zone.runOutsideAngular(() => {
      this.containerScrollSubscription = fromEvent<Event>(
        this.itemsListContainer.nativeElement,
        'scroll'
      ).pipe(
        map((event: any) => ({
          sH: event.target.scrollHeight,
          sT: event.target.scrollTop,
          cH: event.target.clientHeight
        })),
        map(collectedData => collectedData.sH - 200 < collectedData.sT + collectedData.cH),
        tap(shouldLodChunks => shouldLodChunks ? this.addChunks() : null),
        tap(shouldLodChunks => shouldLodChunks ? this.changeRef.detectChanges() : null)
      ).subscribe(
        e => console.log(e, this.allItems.length)
      );
    });
  }

  private addChunks() {
    this.allItems.splice(0, this.lazyItemsChunkCount).forEach(
      item => this.itemsToDisplay.push(item)
    );
  }

  private scrollToTop() {
    this.itemsListContainer.nativeElement.scrollTo(0, 0);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initLazyList();
  }

  ngOnDestroy() {
    if (this.containerScrollSubscription) {
      this.containerScrollSubscription.unsubscribe();
    }
  }
}
