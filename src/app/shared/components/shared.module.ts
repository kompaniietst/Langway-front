import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemToolbarComponent } from './item-toolbar/item-toolbar.component';



@NgModule({
  declarations: [
    ItemToolbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemToolbarComponent
  ]
})
export class SharedModule { }
