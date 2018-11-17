import { Injectable } from '@angular/core';

import { WebWorker } from './web-worker';

@Injectable({
  providedIn: 'root'
})
export class WebWorkerService {

  constructor() { }

  private createWorkerScript<T, R>(script: (data: T) => R): string {
    return `
    function script(data) {
      return (${script.toString()})(data);
    }
    onmessage = function(event) {
      self.postMessage(script(event.data));
    };
    `;
  }

  private stringTextToBlob(scriptString: string): Blob {
    return new Blob([scriptString], { type: 'application/javascript' });
  }

  private createWorkerUrl(scriptString: string): string {
    return URL.createObjectURL(this.stringTextToBlob(scriptString));
  }

  private createWorker<T, R>(script: (d: T) => R): Worker {
    return new Worker(this.createWorkerUrl(
      this.createWorkerScript(script)
    ));
  }

  create<T, R>(script: (d: T) => R): WebWorker<T, R> {
    return new WebWorker<T, R>(this.createWorker(script));
  }
}
