import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumPageRoutingModule } from './album-routing.module';

import { AlbumPage } from './album.page';
import { AlbumModalPageModule } from '../album-modal/album-modal.module';
import { AlbumModalSlidesPageModule } from '../album-modal-slides/album-modal-slides.module';
import { AlbumModalZoomPageModule } from '../album-modal-zoom/album-modal-zoom.module';
import { AlbumSlidesPageModule } from '../album-slides/album-slides.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumPageRoutingModule,
    AlbumModalPageModule, //BORRAR
    AlbumModalZoomPageModule,
    AlbumModalSlidesPageModule,
    AlbumSlidesPageModule
  ],
  declarations: [AlbumPage]
})
export class AlbumPageModule {}