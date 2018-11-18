import { Component, OnInit, Input } from '@angular/core';

export enum BadgeClass {
  primary = 'primary'
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() badgeClass: BadgeClass.primary;

  constructor() { }

  ngOnInit() {
  }

}
