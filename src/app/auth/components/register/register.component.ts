import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ErrorInterface } from 'src/app/shared/types/error.interface';
import { AuthService } from '../../services/auth.service';
import { registerAction } from '../../store/actions/register.actions';
import { errorSelector, isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean | null>;
  error$!: Observable<any>;

  constructor(private store: Store, private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.error$ = this.store.select(errorSelector);
  }

  initForm(): void {
    this.form = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(): void {
    this.store.dispatch(
      registerAction({ request: this.form.value }));
  }
}