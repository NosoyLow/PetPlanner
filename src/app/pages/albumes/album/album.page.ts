import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photos/photos.service';
import { Photo } from '../../../interfaces/photo';
import { AlbumModalZoomPage } from '../album-modal-zoom/album-modal-zoom.page';
import { AlbumModalSlidesPage } from '../album-modal-slides/album-modal-slides.page';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  //Establece en que album estamos
  nombreAlbum: string;
  Fotos: Photo[] = [];

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };

  constructor(public photoService: PhotoService,
    public actionSheetController: ActionSheetController,
    private activatedRoute: ActivatedRoute,
    private menu: MenuController,
    private modalController: ModalController,
    public alertController: AlertController,
    private databaseService: DatabaseService,
    private navController: NavController
  ) {
    this.nombreAlbum = this.activatedRoute.snapshot.params.id;
  }

  async ngOnInit() {
    await this.photoService.loadSaved(this.nombreAlbum);
  }

  //  Abre el menú
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //  Agrega foto a galeria
  addPhotoToGallery() {
    this.photoService.addNewToGallery(this.nombreAlbum);
  }

  //  Modal para ZoomPage
  async openZoom(img) {
    const modal = await this.modalController.create({
      component: AlbumModalZoomPage,
      cssClass: 'transparent-modal',
      componentProps: {
        img
      }
    });
    modal.present();
  }

  //  Modal para SlidesPage
  async openSlides() {
    this.Fotos = this.photoService.photos;
    const modal = await this.modalController.create({
      component: AlbumModalSlidesPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'Photos': this.Fotos
      }
    });
    return await modal.present();
  }

  //  Menú al darle click a una foto
  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Fotos',
      buttons: [
        {
          text: 'Zoom',
          icon: 'move',
          role: 'open',
          handler: () => {
            this.openZoom(photo);
          }
        }, {
          text: 'Borrar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePicture(photo, position, this.nombreAlbum);
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Cierra el modal, no hace nada
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async borrarAlbum() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Borrar Album',
      message: '¿Desea <strong>Borrar</strong> el álbum?',
      buttons: [
        {
          text: 'BORRAR EL ALBUM',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async (blah) => {
            await this.databaseService.deleteMascotas(this.nombreAlbum)
            this.navController.navigateRoot("/")

          }
        }, {
          text: 'CANCELAR',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

}