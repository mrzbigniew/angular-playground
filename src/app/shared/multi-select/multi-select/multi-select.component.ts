// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ContentChild, ViewContainerRef, Renderer2, forwardRef, HostListener, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PopupComponent } from '@progress/kendo-angular-popup';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]
})
export class MultiSelectComponent<T> implements OnInit, OnDestroy, ControlValueAccessor {
  private bodyClickSubscription: Subscription;

  filterValue = '';
  isFocus = false;
  isPopUpOpen = false;

  @ViewChild('multiSelectElement') multiSelect: ElementRef<HTMLDivElement>;
  @ViewChild('filterField') filterTextField: ElementRef<HTMLInputElement>;

  @Input() data: T[] = [];
  @Input() value: T[] = [];
  @Input() disabled = false;
  @Input() filterable = true;
  @Input() textField: string;
  @Input() valueField: string;
  @Input() closeListAfterChange = false;
  @Input() openListOnFocus = true;
  @Input() closeIcon = true;

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
    this.value = value;
  }

  private handleFilterChange(filterValue: string) {
    this.filterValue = filterValue;
  }

  private handleFocus() {
    this.isFocus = true;
  }

  private handleBlur() {
    this.filterChange.emit(null);
  }

  private closeOptionsList() {
    this.isPopUpOpen = false;
  }

  private openOptionsList() {
    this.isPopUpOpen = true;
  }

  ngOnInit() {
    this.initSubscribers();
  }

  ngOnDestroy() {
    if (this.bodyClickSubscription) {
      this.bodyClickSubscription.unsubscribe();
    }
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
    this.change.emit(value || []);
  }

  clearValue() {
    this.change.emit([]);
  }

  removeValue(value: T) {
    this.change.emit(this.value.filter(
      currentValue => this.valueField ? currentValue[this.valueField] !== value[this.valueField] : currentValue !== value
    ));
  }

  trackValueBy(index: number, item: T) {
    const id = btoa(JSON.stringify(item));
    console.log(id);
    return id;
  }

  isSelected(item: T): boolean {
    return this.value && this.value.some(
      currentItem => this.valueField ? currentItem[this.valueField] === item[this.valueField] : currentItem === item
    );
  }

  addValue(value: T) {
    this.change.emit([
      ...this.value,
      value
    ]);
  }

  handleListItemClick(item: T) {
    if (this.isSelected(item)) {
      this.removeValue(item);
    } else {
      this.addValue(item);
    }
    this.filterTextField.nativeElement.focus();
    if (this.closeListAfterChange) {
      this.closeOptionsList();
    }
  }

  popUpOpen() {
    this.bodyClickSubscription = fromEvent<MouseEvent>(document.body, 'click').pipe(
      debounceTime(50),
    ).subscribe(
      event => {
        if (!this.multiSelect.nativeElement.contains(event.target as HTMLElement)) {
          this.closeOptionsList();
          this.bodyClickSubscription.unsubscribe();
        }
      }
    );
  }

  popUpClose() {
    if (this.bodyClickSubscription) {
      this.bodyClickSubscription.unsubscribe();
    }
  }
}
