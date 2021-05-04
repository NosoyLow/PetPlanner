import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgedtPageRoutingModule } from './agedt-routing.module';

import { AgedtPage } from './agedt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgedtPageRoutingModule
  ],
  declarations: [AgedtPage]
})
export class AgedtPageModule {}
