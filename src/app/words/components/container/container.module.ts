import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordsModule } from '../../words.module';
import { UIModule } from 'src/app/UI/UI.module';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WordsModule,
    UIModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule { }
