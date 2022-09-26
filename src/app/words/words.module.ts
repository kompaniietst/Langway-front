import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWordComponent } from './components/add-word/add-word.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordsComponent } from './components/words/words.component';
import { StoreModule } from '@ngrx/store';
import { reducer as createWordReducer } from './store/reducers/create-word-reducer';
import { EffectsModule } from '@ngrx/effects';
import { CreateWordEffect } from './store/effects/create-word.effect';
import { WordService } from './services/word.service';
import { reducer as wordsReducer} from './store/reducers/words-reducer';
import { WordsEffect } from './store/effects/words.effect';
import { UIModule } from '../UI/UI.module';




@NgModule({
  declarations: [
    AddWordComponent,
    WordsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('create word', createWordReducer),
    StoreModule.forFeature('words', wordsReducer),
    EffectsModule.forFeature([CreateWordEffect, WordsEffect]),
    UIModule
  ],
  exports: [
    AddWordComponent,
    WordsComponent,
  ],
  providers: [
    WordService
  ]
})
export class WordsModule { }
