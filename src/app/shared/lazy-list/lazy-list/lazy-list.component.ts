// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, TemplateRef, OnChanges, ViewChild, ElementRef, AfterViewInit, SimpleChanges, NgZone, ChangeDetectorRef, OnDestroy, Renderer2 } from '@angular/core';

import { LazyListItemTemplateDirective } from '../directives/lazy-list-item-template.directive';
import { fromEvent, Subscription, pipe } from 'rxjs';
import { map,  tap, debounceTime, throttleTime } from 'rxjs/operators';

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
  @ViewChild('listItemsContainer') listItemsContainerElement: ElementRef<HTMLDivElement>;

  @Input() valueField: keyof LazyListItem;
  @Input() textField: keyof LazyListItem;
  @Input() initItemsCount = 100;
  @Input() lazyItemsChunkCount = 20;
  @Input() trackItemBy = (i: number, e: LazyListItem) => `${this.textField ? e[this.textField] + e[this.valueField] : e}`;
  @Input() set items(items: LazyListItem[]) {
    if (items) {
      this.allItems = items;
      this.itemsToDisplay = this.allItems.splice(0, this.initItemsCount);
      this.listItemsContainerElement.nativeElement.scrollTo(0, 0);
    }
  }

  constructor(private zone: NgZone,
              private changeRef: ChangeDetectorRef,
              private renderer: Renderer2
  ) { }

  private initLazyList() {
    this.zone.runOutsideAngular(() => {
      this.containerScrollSubscription = fromEvent<Event>(
        this.listItemsContainerElement.nativeElement,
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
      ).subscribe();
    });
  }

  private addChunks() {
    this.allItems.splice(0, this.lazyItemsChunkCount).forEach(
      item => this.itemsToDisplay.push(item)
    );
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
