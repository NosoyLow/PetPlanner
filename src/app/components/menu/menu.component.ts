import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Agenda',
      url: './agenda-view',
      icon: 'people'
    },
    {
      title: 'Productos',
      url: './productos',
      icon: 'search'
    },
    {
      title: 'Gifs',
      url: './gifs',
      icon: 'paw'
    }
  ];

  darkMode: boolean = true;

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  ngOnInit() {}

  cambio(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle ('dark');
  }


}
