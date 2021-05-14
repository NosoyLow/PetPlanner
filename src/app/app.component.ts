import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {
    this.checkDarkTheme();
  }

  checkDarkTheme(){
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // Add or remove the "dark" class based on if the media query matches
    if (prefersDark.matches){
        document.body.classList.toggle('dark');
    }
  }

}