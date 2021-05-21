import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photos/photos.service';
import { Photo } from './../../../../interfaces/photo';

@Component({
  selector: 'app-perdidos-form',
  templateUrl: './perdidos-form.page.html',
  styleUrls: ['./perdidos-form.page.scss'],
})
export class PerdidosFormPage implements OnInit {

  Fotos: Photo [] = [];

  per={
    titulo:'',
    descripcion:'',
    imagen:''
  }

  constructor( public photoService: PhotoService, private activatedRoute: ActivatedRoute,private router: Router) { 
    this.per.imagen = this.activatedRoute.snapshot.params.id;
  }
// funcion para agregar con parametros y informacion
  add(){
    let navigationExtras : NavigationExtras ={
      queryParams:{
        special:JSON.stringify(this.per)
      }

    }
    this.router.navigate(['perdidos-view'],navigationExtras);
  }


  async ngOnInit(){
    await this.photoService.loadSaved(this.per.imagen);
   }

  addPhotoToGallery() {
    this.photoService.addNewToGallery(this.per.imagen);
  }


  onSubmit(formulario:NgForm){
    console.log('submit');
    console.log(this.per);
    console.log(formulario);
  }

}
