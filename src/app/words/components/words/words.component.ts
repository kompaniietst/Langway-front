import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getWordsAction } from '../../store/actions/get-words.actions';
import { wordsSelector } from '../../store/selectors';
import { WordInterface } from '../../types/word.interface';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  words$!: Observable<WordInterface[] | null>;
  list_id!: string;

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const list_id = this.route.snapshot.params['id'];

    this.store.dispatch(getWordsAction({ list_id: list_id }));
    this.words$ = this.store.select(wordsSelector);
  }

}