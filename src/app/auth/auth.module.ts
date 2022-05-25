import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from './components/register/register.component';
import { reducers } from './store/reducers/reducers';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/auth-register.effect';

const routes: Routes = [
  { path: "register", component: RegisterComponent }
];

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
