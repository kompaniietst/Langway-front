import { Component, Input, OnInit } from '@angular/core';
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
  @Input() openedDirectories!: string[];
  state: State = {
    empty: false,
    opened: false,
    isFile: false,
    isFolder: false
  };
  constructor() { }

  ngOnInit(): void {
    this.initializeState();
  }

  initializeState() {
    console.log('e', this.entity);
    
    this.state.empty = !this.entity.hasOwnProperty("children") || this.entity.children.length === 0;
    this.state.opened = this.openedDirectories.includes(this.entity.id);
    this.state.isFile = this.entity.type === 'file';
    this.state.isFolder = this.entity.type === 'folder'
  };
}
