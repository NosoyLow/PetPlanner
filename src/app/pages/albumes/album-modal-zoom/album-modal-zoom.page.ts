import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-album-modal-zoom',
  templateUrl: './album-modal-zoom.page.html',
  styleUrls: ['./album-modal-zoom.page.scss'],
})
export class AlbumModalZoomPage implements OnInit {
  
  // Parámetros
  @ViewChild(IonSlides) slides: IonSlides;
  @Input('img')img: any;
  
  // Define si hay zoom
  sliderOpts = {
    zoom: true
  };
 
  constructor(private modalController: ModalController) { }
 
  ngOnInit() { }
 
  // Actualiza el slide
  ionViewDidEnter(){
      this.slides.update();
  }
  
  // Crea el zoom
  async zoom(zoomIn: boolean) {
    const slider = await this.slides.getSwiper();
    const zoom = slider.zoom;
    zoomIn ? zoom.in() : zoom.out();
  }
 
  // Cierra el modal
  close() {
    this.modalController.dismiss();
  }
}