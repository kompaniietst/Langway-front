import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EntityService } from '../../services/entity.service';
import { getEntitiesAction } from '../../store/actions/get-entities.actions';
import { entitiesSelector } from '../../store/selectors';
import { TreeInterface } from '../../tree/tree.interface';
import { EntityInterface } from '../../types/entity.interface';

export interface State {
  empty: boolean;
  opened: boolean;
  isFile: boolean;
  isFolder: boolean;
}

@Component({
  selector: 'app-entity-tree',
  templateUrl: './entity-tree.component.html',
  styleUrls: ['./entity-tree.component.scss']
})
export class EntityTreeComponent implements OnInit {
  entities$!: Observable<TreeInterface | null>;
  isActiveId!: string;

  openedDirectories!: string[];

  state: State = {
    empty: false,
    opened: false,
    isFile: false,
    isFolder: false
  };

  constructor(private store: Store, private entityService: EntityService) { }

  // public selectNode(node: any): void {
  //   this.id = node.id;

  //   console.log('item', node);


    // console.group( "Selected Tree Node" );
    // console.log( "Label:", node.label );
    // console.log( "Children:", node.children.length );
    // console.groupEnd();

  // }


  activateItem(entity: EntityInterface) {
    // console.log("ID ", id);
    // this.id = id;
    // this.isActive = entity.id;
    this.isActiveId = entity.id;

    console.log('item', entity);

    if (this.openedDirectories?.includes(entity.id)) {
      let i = this.openedDirectories.indexOf(entity.id);
      this.openedDirectories.splice(i, 1);
    }
    else
      this.openedDirectories?.push(entity.id);
    this.state = { ...this.state, opened: true }
    // this.state = {...this.state, opened: true, isFolder: true, empty: entity?.children?.length! > 0}

    this.entityService.openedDirectoriesSubject.next(this.openedDirectories);
    // console.log('this.openedDirectories', this.openedDirectories);

    // console.log('this.activeEntityId', this.activeEntityId);

  }


  ngOnInit(): void {
    this.store.dispatch(getEntitiesAction());
    this.entities$ = this.store.select(entitiesSelector)!;
    this.store.select(entitiesSelector)
      .subscribe(x => console.log(x)
      )
  }

  remove() {
    this.entityService.clearDB().subscribe();
    this.entities$ = this.store.select(entitiesSelector)!;
  }

  checkState(entity: EntityInterface, state: string) {
    return this.openedDirectories?.includes(entity.id);
  }
}