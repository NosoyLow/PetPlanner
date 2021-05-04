import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgedtPage } from './agedt.page';

const routes: Routes = [
  {
    path: '',
    component: AgedtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgedtPageRoutingModule {}
