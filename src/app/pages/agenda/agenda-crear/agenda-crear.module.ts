import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaCrearPageRoutingModule } from './agenda-crear-routing.module';

import { AgendaCrearPage } from './agenda-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaCrearPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgendaCrearPage]
})
export class AgendaCrearPageModule {}
