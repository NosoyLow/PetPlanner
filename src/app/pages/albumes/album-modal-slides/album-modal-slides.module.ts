import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumModalSlidesPageRoutingModule } from './album-modal-slides-routing.module';

import { AlbumModalSlidesPage } from './album-modal-slides.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumModalSlidesPageRoutingModule,
    BrowserModule
  ],
  declarations: [AlbumModalSlidesPage]
})
export class AlbumModalSlidesPageModule {}
