import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPage } from './chat.page';
import { AutosizeModule } from 'ngx-autosize';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
const routes: Routes = [
  {
    path: '',
    component: ChatPage
  }
];

@NgModule({
  imports: [CommonModule,FormsModule,IonicModule,RouterModule.forChild(routes),AutosizeModule],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
