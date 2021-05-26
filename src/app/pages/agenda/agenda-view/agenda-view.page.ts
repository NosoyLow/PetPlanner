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
  ) { }

  //  Destruye la suscripción
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

  //  Crea un nuevo evento con modalController
  async crearSesion() {
    const modal = await this.modalController.create({
      component: AgendaCrearPage,
      cssClass: 'my-custom-class',

    });

    return await modal.present();
  }

  //  Edita el evento con modalController
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

  //  Llama al servicio de base de datos y borra el evento
  eliminar(evento: Evento) {
    this.databaseService.eliminarEvento(evento)
  }

}
