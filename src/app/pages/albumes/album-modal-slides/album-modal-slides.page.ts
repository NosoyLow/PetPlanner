import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { PhotoService } from 'src/app/services/photos/photos.service';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-album-modal-slides',
  templateUrl: './album-modal-slides.page.html',
  styleUrls: ['./album-modal-slides.page.scss'],
})
export class AlbumModalSlidesPage implements OnInit {
  
  constructor ( public photoService: PhotoService,
                private modalController: ModalController,
                private changeDetectorRef: ChangeDetectorRef ) {
  }
  
  ngOnInit(){
  }
  
  // Cierra el modal
  close() {
    this.modalController.dismiss();
  }

  //Establece los parámetros
  zoomActive = false;
  zoomScale = 1;
  
  sliderZoomOpts = {
    allowSlidePrev: false,
    allowSlideNext: false,
    zoom: {
      maxRatio: 5
    },
    on: {
      zoomChange: (scale, imageEl, slideEl) => {        
        this.zoomActive = true;
        this.zoomScale = scale/5;
        this.changeDetectorRef.detectChanges();         
      }
    }
  }
  

  async touchEnd(zoomslides: IonSlides, card) {
    // Restablece el zoom
    const slider = await zoomslides.getSwiper();
    const zoom = slider.zoom;
    zoom.out();
  
    // Devuelve la tarjeta a la normalidad
    card.el.style['z-index'] = 9;
  
    this.zoomActive = false;
    this.changeDetectorRef.detectChanges();
  }
  
  touchStart(card) {
    // Hacer que la tarjeta aparezca sobre el fondo
    card.el.style['z-index'] = 11;
  }

}