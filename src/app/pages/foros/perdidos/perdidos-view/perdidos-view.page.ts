import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perdidos-view',
  templateUrl: './perdidos-view.page.html',
  styleUrls: ['./perdidos-view.page.scss'],
})
export class PerdidosViewPage implements OnInit {

  cont: any;

  constructor(private menu: MenuController,private route: ActivatedRoute,private router: Router) { 

    //resultado de la informacion obtenida
    this.route.queryParams.subscribe(params=>{
      if(params && params.special){
        this.cont = JSON.parse(params.special);
      }
    })
   }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
