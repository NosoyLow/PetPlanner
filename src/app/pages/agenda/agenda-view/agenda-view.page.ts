import { Component, Input, NgModule, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { AgendaEditPage } from '../agenda-edit/agenda-edit.page';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';

// colores

const colors: any = { // inecesary
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

interface MyEvent extends CalendarEvent { // Customizando para agregar otra variable tipo string a los eventos.
  description: string;
  repeat: boolean;
} 

@Component({
  selector: 'app-agenda-view',
  templateUrl: './agenda-view.page.html',
  styleUrls: ['./agenda-view.page.scss'],
})

export class AgendaViewPage implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent:
  TemplateRef<any>;

  


  CalendarView = CalendarView;
  titulos:string; 
  
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: MyEvent;
  }



 constructor(private modal: NgbModal) {} //pendiente

  ngOnInit() {
    console.log(this.titulos);
  }

  handleEvent(action: string, event: MyEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, {size: 'lg'});
  }
  

events: MyEvent[] = [
  
  {
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'A 3 day event',
    description: 'Agenda de mi primer perro',
    repeat: true,
    color: colors.red,
    //actions: this.actions,
    allDay: true,
    resizable: {
      beforeStart: true,
      afterEnd: true,
    },
    draggable: true,
  },

];


 addEvent(): void { // realizar
   this.events = [
     ...this.events,
     {
       title: 'Nuevo evento',
       description: 'Nueva descripcion',
       repeat: true,
       start: startOfDay(new Date()),
       end: endOfDay(new Date()),
       color: colors.red,
     },
   ];
 }

   deleteEvent(eventToDelete: MyEvent) {
 this.events = this.events.filter((event) => event !== eventToDelete);
}


}
