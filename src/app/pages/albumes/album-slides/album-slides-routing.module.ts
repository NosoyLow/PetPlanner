import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumSlidesPage } from './album-slides.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumSlidesPageRoutingModule {}
