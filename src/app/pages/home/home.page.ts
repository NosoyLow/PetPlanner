import { Photo } from 'src/app/interfaces/photo';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photos/photos.service';
import { Subscription } from 'rxjs'
import { DatabaseService } from 'src/app/services/database.service';

interface AlbumCard {
  nombre: string
  photo?: Photo
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit, OnDestroy {

  albumes: AlbumCard[] = [];

  subscription: Subscription

  constructor(
    public photoService: PhotoService,
    private menu: MenuController,
    private databsService: DatabaseService
  ) {
  }
  
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe()
  }

  ngOnInit() {

    this.subscription = this.databsService.albumes.asObservable().subscribe(e => {
      this.getAlbums(e)
    })
  }

  async getAlbums(e: string[]) {
    this.albumes = []
    for (let album of e) {
      const photo = await this.photoService.getFirstPhoto(album)
      this.albumes.push({
        nombre: album,
        photo: photo
      })
    }
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
