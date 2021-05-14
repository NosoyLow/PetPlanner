import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerdidosFormPage } from './perdidos-form.page';

const routes: Routes = [
  {
    path: '',
    component: PerdidosFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerdidosFormPageRoutingModule {}
