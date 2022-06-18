import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEntitiesAction } from '../../store/actions/get-entities.actions';
import { entitiesSelector } from '../../store/selectors';
import { EntityInterface } from '../../types/entity.interface';

@Component({
  selector: 'app-entity-tree',
  templateUrl: './entity-tree.component.html',
  styleUrls: ['./entity-tree.component.scss']
})
export class EntityTreeComponent implements OnInit {
  entities$!: Observable<EntityInterface | null>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getEntitiesAction());
    this.entities$ = this.store.select(entitiesSelector)!;
  }
}