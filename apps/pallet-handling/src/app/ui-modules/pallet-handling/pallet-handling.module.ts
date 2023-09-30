import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalletHandlingRoutingModule } from './pallet-handling-routing.module';
import { PalletHandlingHomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [PalletHandlingHomeComponent],
  imports: [CommonModule, PalletHandlingRoutingModule],
})
export class PalletHandlingModule {}
