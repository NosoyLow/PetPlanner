import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs'
import { Evento } from '../pages/agenda/agenda-crear/agenda-crear.page';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  albumes = new BehaviorSubject<string[]>([])
  nombreAlbum = [];

  eventos = []
  eventosCreados = new BehaviorSubject<Evento[]>([])

  db: SQLiteObject

  constructor(private sqlite: SQLite) { }

  //  ABRE LA BASE DE DATOS
  async openDB() {
    this.db = await this.sqlite.create({
      name: "petsDB.db",
      location: "default"
    })
  }

  //  CREA LA BASE DE DATOS SI NO EXISTE
  async configBD() {
    await this.db.executeSql("CREATE TABLE IF NOT EXISTS albumes (nombreAlbum text not null primary key)", [])
    await this.db.executeSql(`CREATE TABLE IF NOT EXISTS agenda ( titulo text not null,
                                                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                            Mascota text not null,
                                                            descripcion text not null,
                                                            fecha text not null,
                                                            hora text not null
                                                            )`, [])
  }

  // OBTENER LISTA DE MASCOTAS
  async getMascotas() {
    const res = await this.db.executeSql('SELECT * FROM albumes', [])
    let Mascotas = [];
    for (var i = 0; i < res.rows.length; i++) {
      Mascotas.push(res.rows.item(i).nombreAlbum);
    }
    this.nombreAlbum = Mascotas;
    this.albumes.next(this.nombreAlbum)
  }

  //  CREAR ALBUM PARA MASCOTA
  async addMascota(nombre) {
    await this.db.executeSql(`INSERT INTO albumes(nombreAlbum) VALUES ('${nombre}')`, [])
    await this.getMascotas()
  }

  async getEventos() {
    const res = await this.db.executeSql('SELECT * FROM agenda', [])
    let eventos = [];
    for (var i = 0; i < res.rows.length; i++) {
      eventos.push(res.rows.item(i));
    }
    this.eventos = eventos;
    this.eventosCreados.next(this.eventos)
  }

  async addEvento(evento: Evento) {
    await this.db.executeSql(`
    INSERT INTO agenda (
      Mascota,
      descripcion,
      fecha,
      hora,
      titulo
    )
    VALUES (
      '${evento.Mascota}',
      '${evento.descripcion}',
      '${evento.fecha}',
      '${evento.hora}',
      '${evento.titulo}'
    )

    `, [])
    await this.getEventos()
  }

  async editarEvento(evento: Evento) {
    await this.db.executeSql(`
      UPDATE agenda 
        set Mascota = '${evento.Mascota}',
        descripcion = '${evento.descripcion}',
        fecha = '${evento.fecha}',
        hora = '${evento.hora}',
        titulo = '${evento.titulo}'
      WHERE
        id = ${evento.id}
    `, [])
    await this.getEventos()
  }

  async eliminarEvento(evento: Evento) {
    await this.db.executeSql(`DELETE FROM agenda WHERE id = ${evento.id}`, [])
    await this.getEventos()
  }

  // ELIMINAR MASCOTAS
  async deleteMascotas(nombre) {
    await this.db.executeSql(`DELETE FROM albumes WHERE nombreAlbum = '${nombre}'`, [])
    await this.getMascotas()
  }

}