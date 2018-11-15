import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TestPipe } from './test.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestPipe
  ],
  exports: [
    TestPipe
  ]
})
export class TestPipeModule { }
