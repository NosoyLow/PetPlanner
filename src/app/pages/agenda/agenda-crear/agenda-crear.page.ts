import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { Asunto } from '../../../interfaces/data';

export class Evento {
  id: number
  fecha: string
  hora: string
  titulo: string
  descripcion: string
  Mascota: string

}

@Component({
  selector: 'app-agenda-crear',
  templateUrl: './agenda-crear.page.html',
  styleUrls: ['./agenda-crear.page.scss'],
})
export class AgendaCrearPage implements OnInit {

  //  DELCARACIÓN PARA FORMULARIO REACTIVO  
  formInformacion: FormGroup = new FormGroup({})

  @Output() submitForm = new EventEmitter()

  evento

  editing = false

  constructor(private modalController: ModalController, private databaseService: DatabaseService) {
  }



  ngOnInit() {

    if (this.evento)
      this.editing = true
    else
      this.evento = new Evento()
    this.formInformacion = new FormGroup({
      titulo: new FormControl(this.evento.titulo, {
        validators: [
          Validators.required,
          Validators.pattern(/^[a-zA-Z/0-9/ ]+$/),
        ]
      }),
      descripcion: new FormControl(this.evento.descripcion, {
        validators: [
          Validators.required
        ]
      }),
      Mascota: new FormControl(this.evento.Mascota, {
        validators: [
          Validators.required
        ]
      }),

      fecha: new FormControl(this.evento.fecha, {
        validators: [
          Validators.required
        ]
      }),

      hora: new FormControl(this.evento.hora, {
        validators: [
          Validators.required
        ]
      }),
    })
  }

  async onSubmit(values: Evento) {
    try {
      if (!this.editing)
        await this.databaseService.addEvento(values)
      else {
        values.id = this.evento.id
        await this.databaseService.editarEvento(values)
      }
      this.close()
    } catch (error) {
      console.error(error)
    }
  }

  // Cierra el modal
  close() {
    this.modalController.dismiss();
  }





}
