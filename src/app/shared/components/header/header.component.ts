import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from '../../types/current-user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser$!: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.currentUser$ = this.store.select(currentUserSelector);
  }

}
