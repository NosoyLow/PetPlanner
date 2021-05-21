import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GifsPageRoutingModule } from './gifs-routing.module';

import { GifsPage } from './gifs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GifsPageRoutingModule
  ],
  declarations: [GifsPage]
})
export class GifsPageModule {}
