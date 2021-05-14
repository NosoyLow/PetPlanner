import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaViewPageRoutingModule } from './agenda-view-routing.module';

import { AgendaViewPage } from './agenda-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaViewPageRoutingModule
  ],
  declarations: [AgendaViewPage]
})
export class AgendaViewPageModule {}
