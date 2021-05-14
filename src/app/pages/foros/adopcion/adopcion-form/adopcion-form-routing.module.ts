import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdopcionFormPage } from './adopcion-form.page';

const routes: Routes = [
  {
    path: '',
    component: AdopcionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdopcionFormPageRoutingModule {}
