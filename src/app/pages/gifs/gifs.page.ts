import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GifsService } from '../../services/gifs/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.page.html',
  styleUrls: ['./gifs.page.scss'],
})
export class GifsPage {
  
  constructor(private menu: MenuController,
              private gifsService: GifsService) { }

  //  Abre el menú
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //  Busca Gifs
  buscar(event){
    this.gifsService.buscarGifs (event.detail.value);
  }

}
