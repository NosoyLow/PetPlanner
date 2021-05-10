import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Photo } from 'src/app/interfaces/photo';
import { PhotoService } from '../../services/photos/photo.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {

  nombreAlbum: string;

    constructor(public photoService: PhotoService, 
                public actionSheetController: ActionSheetController,
                private activatedRoute: ActivatedRoute,
                private router: Router
    ){
      this.nombreAlbum = this.activatedRoute.snapshot.params.id;
    }
  
    async ngOnInit(){
      //await this.photoService.loadSaved();
      await this.photoService.loadSaved(this.nombreAlbum);
    }
  
    addPhotoToGallery() {
      this.photoService.addNewToGallery(this.nombreAlbum);
    }
  
    public async showActionSheet(photo: Photo, position: number) {
      const actionSheet = await this.actionSheetController.create({
        header: 'Photos',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePicture(photo, position, this.nombreAlbum);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
            }
        }]
      });
      await actionSheet.present();
    }
}
