import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.page.html',
  styleUrls: ['./agenda-edit.page.scss'],
})
export class AgendaEditPage implements OnInit {
  
  //  Define la agenda
  agenda={
    dia_inicio:'',
    titulo:'',
    descripcion: '',
    hora_inicio: '',
    hora_final: '',
    recordar: '',
    repetir: '',
  }
  constructor() { }

  ngOnInit() {
 
  }

  onSubmit(formulario:NgForm){
    console.log('submit');
    console.log(this.agenda);
    console.log(formulario);
  }

}
