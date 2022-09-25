import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityService } from '../../services/entity.service';
import { currentEntitySelector } from '../../store/selectors';
import { NodeInterface } from '../../tree/node.interface';

export interface State {
  empty: boolean;
  opened: boolean;
  isFile: boolean;
  isFolder: boolean;
}

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  @Input() entity!: NodeInterface;
  @Input() activeEntityId!: string;
  openedDirectories!: string[];
  id!: string;

  state: State = {
    empty: false,
    opened: false,
    isFile: false,
    isFolder: false
  };

  constructor(private store: Store, private entityService: EntityService) {

  }

  activateItem(id: string) {
    // console.log("ID ", id);
    // this.id = id;

    if (this.openedDirectories?.includes(this.entity.id)) {
      let i = this.openedDirectories.indexOf(this.entity.id);
      this.openedDirectories.splice(i, 1);
    }
    else
      this.openedDirectories?.push(this.entity.id);

    this.entityService.openedDirectoriesSubject.next(this.openedDirectories);
    // console.log('this.openedDirectories', this.openedDirectories);

    // console.log('this.activeEntityId', this.activeEntityId);

  }

  ngOnInit(): void {
    this.initializeState();

    // console.log('Entity', this.entity);
    // console.log(this.entity.children?.length === 0 || !this.entity.hasOwnProperty("children"));

    // this.state.empty = this.entity.children?.length === 0 || !this.entity.hasOwnProperty("children");
    // console.log('empty ', this.state.empty);


    this.entityService.openedDirectoriesSubject.
      subscribe((data: string[]) => {
        this.openedDirectories = data;
        // console.log('DATA', data);



        this.state.empty = !this.entity.hasOwnProperty("children") || this.entity.children.length === 0;
        this.state.opened = this.openedDirectories.includes(this.entity.id);
        // console.log('empty ', this.state.opened);
        this.state.isFile = this.entity.type === 'file';
        this.state.isFolder = this.entity.type === 'folder'
      });


    // this.store.select(currentEntitySelector)
    // .subscribe((x: any) => {
    //   console.log(x);

    //   // debugger;
    //   // if (x && !this.openedDirectories.includes(x?.id)) {
    //   //   this.openedDirectories.push(x?.id);
    //   //   return;
    //   // }
    // });

    this.entityService.entityPathSubject.subscribe(x => {
      // console.log(x)
    })
  }

  initializeState() {
    // console.log('E', this.entity);
    // console.log("opened dirs: ", this.openedDirectories);


    // this.state.empty = !this.entity.hasOwnProperty("children") || this.entity.children.length === 0;
    // this.state.opened = this.openedDirectories.includes(this.entity.id);
    // this.state.isFile = this.entity.type === 'file';
    // this.state.isFolder = this.entity.type === 'folder'
  };
}
