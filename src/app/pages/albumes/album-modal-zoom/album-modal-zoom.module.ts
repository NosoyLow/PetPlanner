import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumModalZoomPageRoutingModule } from './album-modal-zoom-routing.module';

import { AlbumModalZoomPage } from './album-modal-zoom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumModalZoomPageRoutingModule
  ],
  declarations: [AlbumModalZoomPage]
})
export class AlbumModalZoomPageModule {}
