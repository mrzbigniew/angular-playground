import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'testPipe'
})
export class TestPipe implements PipeTransform {
  private counter = 0;
  transform(value: any, args?: any): any {
    return this.counter++;
  }

}
