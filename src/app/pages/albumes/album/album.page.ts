import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ActionSheetController, MenuController, ModalController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photos/photos.service';
import { Photo } from '../../../interfaces/photo';
import { AlbumModalZoomPage } from '../album-modal-zoom/album-modal-zoom.page';
import { AlbumModalSlidesPage } from '../album-modal-slides/album-modal-slides.page';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  //Establece en que album estamos
  nombreAlbum: string;
  Fotos: Photo [] = [];
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  }

  constructor(public photoService: PhotoService, 
              public actionSheetController: ActionSheetController,
              private activatedRoute: ActivatedRoute,
              private modalController: ModalController,
              private menu: MenuController,
              private changeDetectorRef: ChangeDetectorRef
  ){
    this.nombreAlbum = this.activatedRoute.snapshot.params.id;
  }
  
  async ngOnInit(){
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
            this.openZoom(position);
          }
        },{
          text: 'Borrar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePicture(photo, position, this.nombreAlbum);
          } 
        },{
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          // Nothing to do, action sheet is automatically closed
          } 
        }
      ]
    });
    await actionSheet.present();
  }

}