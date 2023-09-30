import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DataAccessModule } from '@ingd/data-access';
import { AuthModule } from '@ingd/auth';
import { UtilModule } from '@ingd/util';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DataAccessModule,
    AuthModule,
    UtilModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
