import { InjectionToken } from "@angular/core";

export class OnBardingSliderComponentsList extends Array {

}

export const OnBardingSliderComponentsListToken = new InjectionToken<OnBardingSliderComponentsList>('OnBardingSliderComponentsList', {
  providedIn: 'root',
  factory: () => new OnBardingSliderComponentsList()
});