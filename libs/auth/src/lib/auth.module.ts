import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UtilModule } from '@ingd/util';
import { DataAccessModule } from '@ingd/data-access';

@NgModule({
  imports: [CommonModule, UtilModule, DataAccessModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
