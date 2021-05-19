import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaInfoPageRoutingModule } from './agenda-info-routing.module';

import { AgendaInfoPage } from './agenda-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaInfoPageRoutingModule
  ],
  declarations: [AgendaInfoPage]
})
export class AgendaInfoPageModule {}
