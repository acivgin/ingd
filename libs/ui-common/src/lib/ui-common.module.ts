import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { SliderComponent } from './components/slider/slider.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    InputComponent,
    ModalComponent,
    SliderComponent,
    TableComponent,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    ModalComponent,
    SliderComponent,
    TableComponent,
  ],
})
export class INGDCommonModule {}
