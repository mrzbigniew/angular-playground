import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-on-boarding-slider-element',
  templateUrl: './on-boarding-slider-element.component.html',
  styleUrls: ['./on-boarding-slider-element.component.scss']
})
export class OnBoardingSliderElementComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef }) contentViewContainerRef: ViewContainerRef;

  constructor() { }

  ngOnInit() {
  }
}
