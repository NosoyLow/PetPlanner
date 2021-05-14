import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photos/photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  albumes: string [] = ['Firulais', 'Mika', 'Perse', 'Mini', 'Gumaro', 'Dorado'];

  constructor(public photoService: PhotoService) {
  }

  ngOnInit() {
  }

}
