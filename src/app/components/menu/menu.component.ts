import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrearAlbumPage } from '../crear-album/crear-album.page';
import { TutorialPage } from '../../pages/tutorial/tutorial.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Agenda',
      url: './agenda-view',
      icon: 'calendar'
    }
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  //  Modal para crearAlbum
  async crearAlbumModal() {
    const modal = await this.modalController.create({
      component: CrearAlbumPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }


  //  Modal Tutorial
  async openTutorial() {
    const modal = await this.modalController.create({
      component: TutorialPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }

}
