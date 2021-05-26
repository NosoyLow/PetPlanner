import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-crear-album',
  templateUrl: './crear-album.page.html',
  styleUrls: ['./crear-album.page.scss'],
})
export class CrearAlbumPage implements OnInit {

  nombreAlbum: string;
  formAlbum: FormGroup;

  constructor(
    private databaseService: DatabaseService,
    private modalController: ModalController,
    private toast: ToastController
  ) { }

  ngOnInit() {
    //  CREA EL FORMULARIO REACTIVO
    this.formAlbum = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z/0-9/ ]{1,15}$/)
      ])
    })
  }

  //  Acepta el formulario
  async submit(values: any) {
    try {
      
      await this.databaseService.addMascota(values.nombre)
      this.close()
    } catch (error) {
      const toast = await this.toast.create({
        message: "El nombre del album ya existe",
        duration: 2000
      })
      toast.present()
    }
  }

  // Cierra el modal
  close() {
    this.modalController.dismiss();
  }
}
