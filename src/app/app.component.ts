import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  databaseReady = false
  
  //  VERIFICA QUE LA BASE DE DATOS HAYA CARGADO PARA INICIAR LA APLICACIÓN
  constructor(private platform: Platform,
              private databaseService: DatabaseService)
  {
    platform.ready().then ( async e => {
      await this.databaseService.openDB();
      await this.databaseService.configBD();
      await this.databaseService.getMascotas()
      await this.databaseService.getEventos()
      this.databaseReady = true
    })

  }

}