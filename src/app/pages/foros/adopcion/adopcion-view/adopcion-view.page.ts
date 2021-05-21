import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-adopcion-view',
  templateUrl: './adopcion-view.page.html',
  styleUrls: ['./adopcion-view.page.scss'],
})
export class AdopcionViewPage implements OnInit {

inf : any;

  constructor(private menu: MenuController,private route: ActivatedRoute,private router: Router) { 

    //resultado de la informacion obtenida
    this.route.queryParams.subscribe(params=>{
      console.log('params: ',params);
      if(params && params.special){
        this.inf = JSON.parse(params.special);
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
