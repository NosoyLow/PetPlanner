import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  //declaracion de variable 

  messages=[{
    user: 'Alex',
    createdAt: 1554090856000,
    msg:'Hola'
  },
  {
    user: 'Lucas',
    createdAt: 1554090856000,
    msg:'Hola'
  },
  ];

  currentUser='Alex';
  newMsg='';
  @ViewChild(IonContent) content:IonContent
  constructor(private menu: MenuController) { }

  // funcion para mandar mensaje

  sendMessage(){
    this.messages.push({
      user:'Alex',
      createdAt: new Date().getTime(),
      msg:this.newMsg
    });
    this.newMsg='';
    setTimeout(()=>{
      this.content.scrollToBottom(200);
    });
    
  }

  ngOnInit() {
  }

  //abrir menu

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }



}
