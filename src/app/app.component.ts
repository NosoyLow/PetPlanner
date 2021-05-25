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
  
  constructor(private platform: Platform,
              private databaseService: DatabaseService)
  {
    platform.ready().then ( async e => {
      await this.databaseService.openDB();
      await this.databaseService.configBD();
    })

  }

}