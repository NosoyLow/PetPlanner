import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GifsService } from '../../services/gifs/gifs.service';
import {Downloader, DownloadRequest, NotificationVisibility} from "@ionic-native/downloader/ngx"

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.page.html',
  styleUrls: ['./gifs.page.scss'],
})
export class GifsPage {
  
  constructor(private menu: MenuController,
              private gifsService: GifsService,
              private downloader: Downloader) { }

  //  Abre el menú
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //  Busca Gifs
  buscar(event){
    this.gifsService.buscarGifs (event.detail.value);
  }
  
  //  DESCARGAR GIF
  Download(URL){
    var request: DownloadRequest = {
      uri: URL,
      title: 'MyDownload',
      description: '',
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
          dirType: 'Downloads',
          subPath: 'MyFile.apk'
      }
  };

  this.downloader.download(request)
          .then((location: string) => console.log('File downloaded at:'+location))
          .catch((error: any) => console.error(error));
  }

}
