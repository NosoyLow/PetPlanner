import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESTMLResponse, Result } from 'src/app/interfaces/ProductosML';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private servicioUrl : string = 'https://api.mercadolibre.com/sites/MLM/search?q='
  public resultados   : Result[] = [];

  constructor( private http: HttpClient ) { }

  buscarProductos(product){
    this.http.get<RESTMLResponse>(`${this.servicioUrl}${product}`)
    .subscribe(resp => {
      this.resultados = resp.results;
    });
  }



}
