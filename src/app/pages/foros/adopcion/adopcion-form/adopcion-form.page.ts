import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photos/photos.service';
import { Photo } from './../../../../interfaces/photo';


@Component({
  selector: 'app-adopcion-form',
  templateUrl: './adopcion-form.page.html',
  styleUrls: ['./adopcion-form.page.scss'],
})
export class AdopcionFormPage implements OnInit {
 
  Fotos: Photo [] = [];

  adp={
    titulo:'',
    descripcion:'',
    imagen:''
}

  constructor( public photoService: PhotoService, private activatedRoute: ActivatedRoute,private router: Router) { 
  }
  
// funcion para agregar con parametros y mandar informacion
  add(){
    let navigationExtras : NavigationExtras ={
      queryParams:{
        special:JSON.stringify(this.adp)
      }

    }
    this.router.navigate(['adopcion-view'],navigationExtras);
  }

  async ngOnInit(){
    await this.photoService.loadSaved(this.adp.imagen);
   }

  addPhotoToGallery() {
    this.photoService.addNewToGallery(this.adp.imagen);
  }


  onSubmit(formulario:NgForm){
    console.log('submit');
    console.log(this.adp);
    console.log(formulario);
  }

}
