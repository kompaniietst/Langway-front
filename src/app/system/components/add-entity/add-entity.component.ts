import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { createEntityAction } from '../../store/actions/create-entity.actions';
import { getEntitiesAction } from '../../store/actions/get-entities.actions';
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

  constructor(private store: Store, private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
    // this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.error$ = this.store.select(errorSelector);
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      type: new FormControl("folder")
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    
    this.store.dispatch(
      createEntityAction({ request: this.form.value }));
      this.store.dispatch(getEntitiesAction());
  }
}

