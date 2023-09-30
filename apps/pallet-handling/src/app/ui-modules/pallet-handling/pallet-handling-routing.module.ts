import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalletHandlingHomeComponent } from './pages/home/home.component';

const routes: Routes = [{ path: '', component: PalletHandlingHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalletHandlingRoutingModule { }
