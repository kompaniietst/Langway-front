import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EntityService } from '../../services/entity.service';
import { createEntityAction } from '../../store/actions/create-entity.actions';
import { errorSelector } from '../../store/selectors';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss']
})
export class AddEntityComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean | null>;
  error$!: Observable<any>;
  path: string[] = [];

  constructor(private store: Store, private entityService: EntityService) {

    this.entityService.nodePathSubject
      .subscribe((path: string[]) => {
        this.path = path
      });
  }

  ngOnInit(): void {
    this.initForm();
    this.error$ = this.store.select(errorSelector);
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('test'),
      type: new FormControl("folder"),
    });
  }

  onSubmit(): void {
    console.log(this.path);
    
    this.form.addControl("path", new FormControl(this.path));
    const request = this.form.value;

    this.store.dispatch(
      createEntityAction({ request: request }));

    this.initForm();
  }
}