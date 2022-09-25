import { Component, Input, OnInit } from '@angular/core';
import { EntityService } from 'src/app/system/services/entity.service';
import { EntityInterface } from 'src/app/system/types/entity.interface';

export interface State {
  empty: boolean;
  opened: boolean;
  isFile: boolean;
  isFolder: boolean;
}

@Component({
  selector: 'app-single-entity',
  templateUrl: './single-entity.component.html',
  styleUrls: ['./single-entity.component.scss']
})
export class SingleEntityComponent implements OnInit {
  @Input() node!: EntityInterface;
  @Input() isActive: boolean = false;
  @Input() opened: boolean = false;
  openedDirectories: string[] = []

  constructor(private entityService: EntityService) {
    this.entityService.openedDirectoriesSubject
      .subscribe((directories: string[]) => {
        this.openedDirectories = directories;
        console.log('OD ', this.openedDirectories);
        this.state.opened = directories.includes(this.node?.id);
      });
  }

  state: State = {
    empty: false,
    opened: false,
    isFile: false,
    isFolder: false
  };

  ngOnInit(): void {


    if (this.node)
      this.state = {
        empty: !this.node.hasOwnProperty("children") || this.node?.children?.length === 0,
        opened: false,
        isFile: this.node.type === 'file',
        isFolder: this.node.type === 'folder'
      }
  }

}
