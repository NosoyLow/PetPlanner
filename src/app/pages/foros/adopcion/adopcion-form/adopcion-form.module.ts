import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdopcionFormPageRoutingModule } from './adopcion-form-routing.module';

import { AdopcionFormPage } from './adopcion-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdopcionFormPageRoutingModule
  ],
  declarations: [AdopcionFormPage]
})
export class AdopcionFormPageModule {}
