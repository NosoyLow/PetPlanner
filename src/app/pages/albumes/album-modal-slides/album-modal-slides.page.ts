import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from 'src/app/services/photos/photos.service';
import { IonSlides, ModalController } from '@ionic/angular';
import { Photo } from '../../../interfaces/photo';

@Component({
  selector: 'app-album-modal-slides',
  templateUrl: './album-modal-slides.page.html',
  styleUrls: ['./album-modal-slides.page.scss'],
})
export class AlbumModalSlidesPage implements OnInit {
  //Establece en que album estamos
  nombreAlbum: string;
  //@ViewChild(IonSlides) slides: IonSlides;
  //@Input() Photos: Photo;


  constructor() //public photoService: PhotoService,
               //private modalController: ModalController,
               //private changeDetectorRef: ChangeDetectorRef ) {
  {}

  //  Carga las fotos
   ngOnInit(){
    //await this.photoService.loadSaved();
   //await this.photoService.loadSaved(this.nombreAlbum);
  }

  /*//  Cierra el Ion-Modal
  close() {
    this.modalController.dismiss();
  }

  //  Funcion para realizar el zoom
  zoomActive = false;
  zoomScale = 1;

  sliderZoomOpts = {
    allowSlidePrev: true,
    allowSlideNext: true,
    zoom: {
      maxRatio: 2.5
    },
    on: {
      zoomChange: (scale, imageEl, slideEl) => {        
        this.zoomActive = true;
        this.zoomScale = scale/5;
        this.changeDetectorRef.detectChanges();         
      }
    }
  }
  */
}
