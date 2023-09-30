import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModulesRoutingModule } from './ui-modules-routing.module';
import { INGDCommonModule } from '@ingd/ui-common';
import { AuthModule } from '@ingd/auth';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiModulesRoutingModule, INGDCommonModule, AuthModule],
})
export class UiModulesModule {}
