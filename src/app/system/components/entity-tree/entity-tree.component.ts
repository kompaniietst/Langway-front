import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EntityService } from '../../services/entity.service';
import { getEntitiesAction } from '../../store/actions/get-entities.actions';
import { currentEntitySelector, entitiesSelector } from '../../store/selectors';
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

  openedDirectories: string[] = [];

  state: State = {
    empty: false,
    opened: false,
    isFile: false,
    isFolder: false
  };

  constructor(private store: Store, private entityService: EntityService, private router: Router) { }

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

    if (entity.type === 'file') {
      this.openList(entity.id);
    }

    this.isActiveId = entity.id;

    console.log('item', entity);
    // debugger;

    if (this.openedDirectories?.includes(entity.id)) {
      let i = this.openedDirectories.indexOf(entity.id);
      this.openedDirectories.splice(i, 1);
    }
    else
      this.openedDirectories?.push(entity.id);

    this.state = { ...this.state, opened: true }
    // this.state = {...this.state, opened: true, isFolder: true, empty: entity?.children?.length! > 0}

    this.entityService.openedDirectoriesSubject.next(this.openedDirectories);
    console.log('this.openedDirectories', this.openedDirectories);

    // console.log('this.activeEntityId', this.activeEntityId);


    this.entityService.nodePathSubject.next([...entity.path, entity.id]);

    console.log('path: ', [...entity.path, entity.id]);


  }


  ngOnInit(): void {
    // this.entities$?.subscribe(es=>console.log('entities ', es));
    
    this.store.dispatch(getEntitiesAction());
    this.entities$ = this.store.select(entitiesSelector)!;
    this.store.select(currentEntitySelector)
      .subscribe((entity: any) => this.isActiveId = entity?.id)
      this.store.select(entitiesSelector)
      .subscribe((entities: any) => console.log('entities ',entities));




    this.entityService.openedDirectoriesSubject
      .subscribe((directories: string[]) => {
        this.openedDirectories = directories;
        // console.log('OD ', this.openedDirectories);

      });

  }

  remove() {
    this.entityService.clearDB().subscribe();
    this.entities$ = this.store.select(entitiesSelector)!;
  }


  openList(id: string) {
    this.router.navigate([`/entities/list/${id}`]);
  }
}