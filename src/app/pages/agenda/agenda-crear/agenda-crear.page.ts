import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Asunto } from '../../../interfaces/data';



@Component({
  selector: 'app-agenda-crear',
  templateUrl: './agenda-crear.page.html',
  styleUrls: ['./agenda-crear.page.scss'],
})
export class AgendaCrearPage implements OnInit {

  //  DELCARACIÓN PARA FORMULARIO REACTIVO  
  formInformacion: FormGroup = new FormGroup({})

  @Input() asunto = new Asunto()
  @Output() submitForm = new EventEmitter()
  // GUARDAN LA HORA DEL DATETIME
  fecha: Date = new Date();
  hora: Date = new Date();

  constructor(private modalController: ModalController) {
  }

  

  ngOnInit() {
    this.formInformacion = new FormGroup({
      titulo: new FormControl(this.asunto.titulo, {
        validators: [
          Validators.required,
          Validators.pattern(/^[a-zA-Z/0-9/ ]+$/),
        ]
      }),
      descripcion: new FormControl(this.asunto.titulo, {
        validators: [
          Validators.required
        ]
      }),
      mascota: new FormControl(this.asunto.titulo, {
        validators: [
          Validators.required
        ]
      }),
    })
  }

  onSubmit(values: any) {
    console.log(values)
    this.submitForm.emit(values)
  }

  // Cierra el modal
  close() {
   this.modalController.dismiss();
  }





}
