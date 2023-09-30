import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ingd-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {}
