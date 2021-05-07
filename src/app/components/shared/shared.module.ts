import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from 'src/app/components/shared/toolbar/toolbar.component';





@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
