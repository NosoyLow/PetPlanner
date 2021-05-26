import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { AgendaCrearPage, Evento } from '../agenda-crear/agenda-crear.page';

@Component({
  selector: 'app-agenda-view',
  templateUrl: './agenda-view.page.html',
  styleUrls: ['./agenda-view.page.scss'],
})

export class AgendaViewPage implements OnInit, OnDestroy {

  agendas: Evento[] = []

  subscription: Subscription

  constructor(private menu: MenuController,
    private modalController: ModalController,
    private databaseService: DatabaseService
  ) { console.log("holaaa") }
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe()
  }

  ngOnInit() {

    this.subscription = this.databaseService.eventosCreados.subscribe(e => {
      this.agendas = e
    })

  }


  //  Abre el menú
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async crearSesion() {
    const modal = await this.modalController.create({
      component: AgendaCrearPage,
      cssClass: 'my-custom-class',

    });

    return await modal.present();
  }


  async editar(evento: Evento) {
    console.log("ID",evento.id)
    const modal = await this.modalController.create({
      component: AgendaCrearPage,
      cssClass: 'my-custom-class',
      componentProps: {
        evento: evento
      }
    });

    return await modal.present();
  }

  eliminar(evento: Evento) {
    this.databaseService.eliminarEvento(evento)
  }

}
