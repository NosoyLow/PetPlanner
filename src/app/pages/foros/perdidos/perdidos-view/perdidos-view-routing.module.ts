import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerdidosViewPage } from './perdidos-view.page';

const routes: Routes = [
  {
    path: '',
    component: PerdidosViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerdidosViewPageRoutingModule {}
