import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  nombreAlbum = [];
  db: SQLiteObject

  constructor(private sqlite: SQLite) { }

  //  ABRE LA BASE DE DATOS
  async openDB(){
    this.db = await this.sqlite.create({
      name: "petsDB.db",
      location: "default"
    })
  }

  //  CREA LA BASE DE DATOS SI NO EXISTE
  async configBD(){
    await this.db.executeSql("CREATE TABLE IF NOT EXISTS albumes (nombreAlbum text not null primary key)",[])
    await this.db.executeSql(`CREATE TABLE IF NOT EXISTS agenda ( titulo text not null,
                                                            id INTEGER PRIMARY KEY AUTOINCREMENT
                                                            Mascota text not null,
                                                            descripcion text not null,
                                                            fecha text not null,
                                                            hora text not null
                                                            )`,[])
  }

  // OBTENER LISTA DE MASCOTAS
  getMascotas (){
    return this.db.executeSql('SELECT * FROM albumes)', []).then( res => {
      let Mascotas = [];
      if (res.rows.lenght > 0){
        for (var i = 0; i < res.rows.length; i++) { 
          Mascotas.push({ 
            nombreAlbum: res.rows.item(i)
          });
        }
      }
      this.nombreAlbum = Mascotas;
    })
  }

  //  CREAR ALBUM PARA MASCOTA
  addMascota (nombre){
    return this.db.executeSql ('INSERT INTO albumes VALUES (nombre)', nombre)
    .then ( res => {
      this.getMascotas();
    })
  }

  // ELIMINAR MASCOTAS
  deleteMascotas (nombre){
    return this.db.executeSql ('DELETE FROM albumes WHERE nombreAlbum = (nombre)', nombre)
    .then (res => {
      this.getMascotas
    })
  }



  



}
