import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  // Cierra el modal
  close() {
    this.modalController.dismiss();
  }

}
