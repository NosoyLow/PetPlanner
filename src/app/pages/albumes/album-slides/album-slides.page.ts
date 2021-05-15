import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PhotoService } from 'src/app/services/photos/photos.service';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-album-slides',
  templateUrl: './album-slides.page.html',
  styleUrls: ['./album-slides.page.scss'],
})
export class AlbumSlidesPage implements OnInit {
  //Establece en que album estamos
  nombreAlbum: string;
  //@ViewChild(IonSlides) slides: IonSlides;
  
    constructor( public photoService: PhotoService,
                 private changeDetectorRef: ChangeDetectorRef ) {
    }
  
    //  Carga las fotos
    /*async */ngOnInit(){
      //await this.photoService.loadSaved();
     //await this.photoService.loadSaved(this.nombreAlbum);
    }
  
  // //  Funcion para realizar el zoom
  // zoomActive = false;
  // zoomScale = 1;
  
  // sliderZoomOpts = {
  //   allowSlidePrev: true,
  //   allowSlideNext: true,
  //   zoom: {
  //     maxRatio: 2.5
  //     },
  //     on: {
  //     zoomChange: (scale, imageEl, slideEl) => {        
  //       this.zoomActive = true;
  //       this.zoomScale = scale/5;
  //       this.changeDetectorRef.detectChanges();         
  //     }
  //   }
  // }


}
  










