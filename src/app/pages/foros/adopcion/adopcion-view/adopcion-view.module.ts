import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdopcionViewPageRoutingModule } from './adopcion-view-routing.module';

import { AdopcionViewPage } from './adopcion-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdopcionViewPageRoutingModule
  ],
  declarations: [AdopcionViewPage]
})
export class AdopcionViewPageModule {}
