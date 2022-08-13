import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordsModule } from '../../words.module';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WordsModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule { }
