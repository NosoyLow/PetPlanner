import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerdidosViewPageRoutingModule } from './perdidos-view-routing.module';

import { PerdidosViewPage } from './perdidos-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerdidosViewPageRoutingModule
  ],
  declarations: [PerdidosViewPage]
})
export class PerdidosViewPageModule {}
