import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaCrearPage } from './agenda-crear.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaCrearPageRoutingModule {}
