import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumSlidesPageRoutingModule } from './album-slides-routing.module';

import { AlbumSlidesPage } from './album-slides.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    IonicModule,
    AlbumSlidesPageRoutingModule
  ],
  declarations: [AlbumSlidesPage]
})
export class AlbumSlidesPageModule {}
