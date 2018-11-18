import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, NgZone, ChangeDetectorRef } from '@angular/core';
import { WebWorkerService } from '@shared/web-worker-service/web-worker.service';
import { WebWorker } from '@shared/web-worker-service/web-worker';
import { fromEvent, pipe } from 'rxjs';
// tslint:disable-next-line:max-line-length
import { delay, switchMap, map, last, throttleTime, throttle, take, race, debounceTime, distinctUntilChanged, flatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('input') inputText: ElementRef;
  @ViewChild('lazyLoader') lazyLoaderElement: ElementRef;

  data = [];
  fullData = [];

  // array = new Array(100000).fill(null).map(
  //   (e, i) => ({
  //     label: new Array(25).fill(null).map(
  //       // tslint:disable-next-line:no-bitwise
  //       () => String.fromCharCode((Math.random() * (200 - 0 + 1) + 0 << 0))
  //     ).join(''),
  //     value: i
  //   })
  // );

  array = 'abcdefghijklmnoprstuwyz'.split('').map(
    item => ({
      label: item,
      value: item
    })
  );

  value = [];

  sortWorker: WebWorker<{ dir: string, arr: Array<{ label: string }> }, Array<{ label: string }>>;
  filterWorker: WebWorker<{ value: string, arr: Array<{ label: string }> }, Array<{ label: string }>>;

  constructor(
    private webWorkerService: WebWorkerService,
    private zone: NgZone,
    private changeRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.data = this.array;
    this.value = this.data.slice(0, 10);
    this.sortWorker = this.webWorkerService.create<{ dir: string, arr: Array<{ label: string }> }, Array<{ label: string }>>(
      data => {
        const dir = data.dir;
        const arr = data.arr.sort(
          (c, n) => c.label === n.label ? 0 : c.label > n.label ? 1 : -1
        );
        return dir === 'desc' ? arr.reverse() : arr;
      }
    );

    this.filterWorker = this.webWorkerService.create<{ value: string, arr: Array<{ label: string }> }, Array<{ label: string }>>(
      data => data.arr.filter(
        item => item.label.toLowerCase().trim().includes(
          data.value.toLowerCase()
        )
      )
    );
  }

  ngAfterViewInit() {
    // this.zone.runOutsideAngular(() => {
    //   fromEvent(this.inputText.nativeElement, 'keyup').pipe(
    //     debounceTime(200),
    //     distinctUntilChanged(),
    //     map((event: any) => event.target.value),
    //     flatMap(
    //       value => this.filterWorker.postMessage({
    //         value: value,
    //         arr: this.array
    //       })
    //     ),
    //     tap(
    //       res => this.fullData = res.map(
    //         (e, i) => ({
    //           ...e,
    //           index: i
    //         })
    //       )
    //     ),
    //     tap(
    //       res => this.data = this.fullData
    //     )
    //   ).subscribe(
    //     () => this.changeRef.detectChanges()
    //   );
    // });
  }
}
