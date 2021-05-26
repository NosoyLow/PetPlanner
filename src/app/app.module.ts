import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Downloader } from "@ionic-native/downloader/ngx";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from './components/menu/menu.component';
import { AlbumModalSlidesPageModule } from './pages/albumes/album-modal-slides/album-modal-slides.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, FormsModule,
    AlbumModalSlidesPageModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, Downloader],
  bootstrap: [AppComponent],
})
export class AppModule {}
