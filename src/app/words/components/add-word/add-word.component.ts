import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { createWordAction } from '../../store/actions/create-word.actions';
import { getWordsAction } from '../../store/actions/get-words.actions';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {
  form!: FormGroup;
  list_id!: string;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.route.params
      .subscribe(params => this.list_id = params["id"])
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      word: new FormControl(),
      translate: new FormControl(),
      transcription: new FormControl()
    })
  }

  onSubmit() {
    const request = this.form.value;
    request.list_id = this.list_id;
    console.log(request);
    this.store.dispatch(createWordAction({ request: request }));
    this.store.dispatch(getWordsAction({ list_id: this.list_id }));
  }
}