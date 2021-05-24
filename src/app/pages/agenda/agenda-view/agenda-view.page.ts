import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AgendaCrearPage } from '../agenda-crear/agenda-crear.page';

@Component({
  selector: 'app-agenda-view',
  templateUrl: './agenda-view.page.html',
  styleUrls: ['./agenda-view.page.scss'],
})

export class AgendaViewPage implements OnInit {
 
  constructor(private menu: MenuController,
              private modalController: ModalController){ console.log("holaaa")}

  ngOnInit() {}


  //  Abre el menú
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async crearSesion() {
    const modal = await this.modalController.create({
      component: AgendaCrearPage,
      cssClass: 'my-custom-class',
      componentProps: {

      }
    });
    modal.onDidDismiss().then(data => {})
    return await modal.present();
  }

}
