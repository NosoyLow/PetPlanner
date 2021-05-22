import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../../services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage{

  nombre: string;

  constructor(private menu: MenuController,
              private productosService: ProductosService) {}

    //  Abre el menú
    openFirst() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }
    
  //  Busca Productos
  buscar(nombre){
    this.productosService.buscarProductos(nombre);
  }

}
