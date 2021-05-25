import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAlbumPageRoutingModule } from './crear-album-routing.module';

import { CrearAlbumPage } from './crear-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearAlbumPageRoutingModule
  ],
  declarations: [CrearAlbumPage]
})
export class CrearAlbumPageModule {}
