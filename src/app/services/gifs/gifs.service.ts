import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from 'src/app/interfaces/gifs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  //  API KEY ESCONDIDA EN ENVIRONMENT
  private apikey = environment.gifApiKey;

  private servicioUrl : string = 'https://api.giphy.com/v1/gifs'
  public resultados   : Gif[] = [];
  
  constructor( private http: HttpClient ) { }

  // Busca los gifs
  buscarGifs (query: string){
    
    //  Vuelve minúscula la cadena
    query = query.trim().toLocaleLowerCase();

    // Realiza la petición
    const params = new HttpParams()
      .set('api_key',this.apikey)
      .set('limit','20')
      .set('q',query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe(resp => {
        this.resultados = resp.data;
      });
  }

}
