import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.page.html',
  styleUrls: ['./album-modal.page.scss'],
})
export class AlbumModalPage implements OnInit {
  
  @ViewChild(IonSlides) slides: IonSlides;
  @Input('img')img: any;
 
  sliderOpts = {
    zoom: true
  };
 
  constructor(private modalController: ModalController) { }
 
  ngOnInit() { }
 
  ionViewDidEnter(){
    this.slides.update();
  }
 
  async zoom(zoomIn: boolean) {
    const slider = await this.slides.getSwiper();
    const zoom = slider.zoom;
    zoomIn ? zoom.in() : zoom.out();
  }
 
  close() {
    this.modalController.dismiss();
  }
}
