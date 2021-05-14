import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdopcionViewPage } from './adopcion-view.page';

const routes: Routes = [
  {
    path: '',
    component: AdopcionViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdopcionViewPageRoutingModule {}
