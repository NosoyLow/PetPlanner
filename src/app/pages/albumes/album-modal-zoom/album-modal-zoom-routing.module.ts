import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumModalZoomPage } from './album-modal-zoom.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumModalZoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumModalZoomPageRoutingModule {}
