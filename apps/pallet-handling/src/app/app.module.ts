import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DataAccessModule } from '@ingd/data-access';
import { AuthModule } from '@ingd/auth';
import { INGDCommonModule } from '@ingd/ui-common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DataAccessModule,
    AuthModule,
    INGDCommonModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
