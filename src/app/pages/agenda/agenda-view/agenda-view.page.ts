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

  
  //@ViewChild(MenuController) menu: MenuController;
  


  CalendarView = CalendarView;
  titulos:string; 
  
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: MyEvent;
  }

// acciones en calendar
/*
actions: CalendarEventAction[] = [
  {
    label: '<i class="fas fa-fw fa-pencil-alt"></i>',
    a11yLabel: 'Edit',
    onClick: ({ event }: { event: MyEvent }): void => {
      this.handleEvent('Edited', event);
    },
  },
  {
    label: '<i class="fas fa-fw fa-trash-alt"></i>',
    a11yLabel: 'Delete',
    onClick: ({ event }: { event: MyEvent }): void => {
      this.events = this.events.filter((iEvent) => iEvent !== event);
      this.handleEvent('Deleted', event);
    },
  },
];
*/
  //constructor(private menu: MenuController) { }

 constructor(private modal: NgbModal) {} //pendiente

  ngOnInit() {
    console.log(this.titulos);
  }

  handleEvent(action: string, event: MyEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, {size: 'lg'});
  }
  
// eventos

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
  /*
  {
    start: startOfDay(new Date()),
    title: 'An event with no end date',
    color: colors.yellow,
    actions: this.actions,
  },
  {
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    title: 'A long event that spans 2 months',
    color: colors.blue,
    allDay: true,
  },
  {
    start: addHours(startOfDay(new Date()), 2),
    end: addHours(new Date(), 2),
    title: 'A draggable and resizable event',
    color: colors.yellow,
    actions: this.actions,
    resizable: {
      beforeStart: true,
      afterEnd: true,
    },
    draggable: true,
  },
  */
];

// fin eventos

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


 // openFirst() {
   // this.menu.enable(true, 'first');
  //  this.menu.open('first');
//  }

}
