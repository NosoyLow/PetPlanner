import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { AgendaEditPage } from '../agenda-edit/agenda-edit.page';

@Component({
  selector: 'app-agenda-view',
  templateUrl: './agenda-view.page.html',
  styleUrls: ['./agenda-view.page.scss'],
})

export class AgendaViewPage implements OnInit {

  titulos:string;

  constructor(private menu: MenuController) { }



  ngOnInit() {
    console.log(this.titulos);
  }

 

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
