import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'pallet-handling',
        loadChildren: () =>
          import('./pallet-handling/pallet-handling.module').then(
            (m) => m.PalletHandlingModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UiModulesRoutingModule {}
