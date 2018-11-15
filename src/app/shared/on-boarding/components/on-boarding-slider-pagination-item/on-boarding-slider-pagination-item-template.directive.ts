import { Directive, TemplateRef, Input } from '@angular/core';
import { OnBoardingPaginationItemData } from '../../models/on-boarding-pagination-item-data.model';

@Directive({
  selector: '[onbPaginationItemTemplate]'
})
export class OnBoardingSliderPaginationItemTemplateDirective {
  constructor(
    public templateRef: TemplateRef<any>
  ) {}
}
