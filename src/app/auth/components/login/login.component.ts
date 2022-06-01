import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { loginAction } from '../../store/actions/login.actions';
import { errorSelector, isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(): void {
    this.store.dispatch(
      loginAction({ request: this.form.value }));
  }
}
