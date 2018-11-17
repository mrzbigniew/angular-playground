import { Observable, fromEvent, Observer } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface RunnableWebWorker<P, R> {
  postMessage(data: P, transferable?: Transferable[]): Observable<R>;
}


export interface StoppableWebWorker {
  terminate(): void;
}

export class WebWorker<P, R> implements RunnableWebWorker<P, R>, StoppableWebWorker {
  constructor(private worker: Worker) { }

  terminate(): void {
    this.worker.terminate();
  }

  postMessage(data: P, transferable?: Transferable[]): Observable<R> {
    const worker$ = fromEvent(this.worker, 'message');
    return Observable.create((observer: Observer<R>) => {
      const sub = worker$.pipe(
        map<any, R>(message => message.data)
      ).subscribe(
        msg => {
          observer.next(msg);
          observer.complete();
          sub.unsubscribe();
        }
      );
      this.worker.postMessage(data, transferable);
    });
  }
}
