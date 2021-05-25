import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-crear-album',
  templateUrl: './crear-album.page.html',
  styleUrls: ['./crear-album.page.scss'],
})
export class CrearAlbumPage implements OnInit {
  
  nombreAlbum: string;
  formAlbum: FormGroup;

  constructor(databaseService: DatabaseService,
              private formBuilder: FormBuilder,
              private modalController: ModalController) { }

  ngOnInit() {
    //  CREA EL FORMULARIO REACTIVO
    this.formAlbum = this.formBuilder.group({
        nombre: ['', [
                        Validators.required,
                        Validators.pattern(/^[a-zA-Z/0-9/ ]{1,15}$/)
                      ]
      ]
    }) 
  }

  // Cierra el modal
  close() {
    this.modalController.dismiss();
  }
}
