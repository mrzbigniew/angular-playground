import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent<T> implements OnInit, ControlValueAccessor {
  filterValue = '';
  isFocus = false;

  @ViewChild('filterField') filterTextField: ElementRef<HTMLInputElement>;

  @Input() data: T[];
  @Input() value: T[];
  @Input() disabled = false;
  @Input() filterable = true;
  @Input() textField: string;
  @Input() valueField: string;
  @Input() closeListAfterChange = true;
  @Input() openListOnFocus = true;

  @Output() change: EventEmitter<T[]> = new EventEmitter();
  @Output() filterChange: EventEmitter<string> = new EventEmitter();
  @Output() focus: EventEmitter<void> = new EventEmitter();
  @Output() blur: EventEmitter<void> = new EventEmitter();

  constructor() { }

  private initSubscribers() {
    this.change.subscribe(
      value => this.handleValueChange(value)
    );
    this.filterChange.subscribe(
      filterValue => this.handleFilterChange(filterValue)
    );
    this.focus.subscribe(
      () => this.handleFocus()
    );
    this.blur.subscribe(
      () => this.handleBlur()
    );
  }

  private handleValueChange(value: T[]) {

  }

  private handleFilterChange(filterValue: string) {
    this.filterValue = filterValue;
  }

  private handleFocus() {
    this.openOptionsList();
  }

  private handleBlur() {
    this.closeOptionsList();
    this.filterChange.emit(null);
  }

  private closeOptionsList() {

  }

  private openOptionsList() {

  }

  ngOnInit() {
    this.initSubscribers();
  }

  registerOnChange(foo: Function) {
    this.change.subscribe(foo);
  }

  registerOnTouched(foo: Function) {
    this.focus.subscribe(foo);
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  writeValue(value: any[]) {
    this.value = value;
  }
}
