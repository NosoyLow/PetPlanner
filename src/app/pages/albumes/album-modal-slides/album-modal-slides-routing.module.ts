import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumModalSlidesPage } from './album-modal-slides.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumModalSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumModalSlidesPageRoutingModule {}
