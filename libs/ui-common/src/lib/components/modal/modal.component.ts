import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ingd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {}
