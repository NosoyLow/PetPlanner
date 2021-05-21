import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { IonicModule } from '@ionic/angular';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendaViewPageRoutingModule } from './agenda-view-routing.module';
import { AgendaViewPage } from './agenda-view.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaViewPageRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [AgendaViewPage]
})
export class AgendaViewPageModule {}
