import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerdidosFormPageRoutingModule } from './perdidos-form-routing.module';

import { PerdidosFormPage } from './perdidos-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerdidosFormPageRoutingModule
  ],
  declarations: [PerdidosFormPage]
})
export class PerdidosFormPageModule {}
