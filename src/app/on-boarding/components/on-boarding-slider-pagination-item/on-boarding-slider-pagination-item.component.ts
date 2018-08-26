import { Component, OnInit, Input } from '@angular/core';
import { OnBoardingPaginationItemData } from '../../models/on-boarding-pagination-item-data.model';

@Component({
  selector: 'onb-slider-pagination-item',
  templateUrl: './on-boarding-slider-pagination-item.component.html',
  styleUrls: ['./on-boarding-slider-pagination-item.component.scss']
})
export class OnBoardingSliderPaginationItemComponent implements OnInit {
  @Input() data: OnBoardingPaginationItemData = null;

  constructor() { }

  ngOnInit() {
  }

}
