import { Component, Input, OnInit } from '@angular/core';
import { NodeInterface } from '../../tree/node.interface';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  @Input() entity!: NodeInterface;
  @Input() openedDirectories!: string[];
  constructor() { }

  ngOnInit(): void {
  }

  isEntity(state: string) {
    if (state === 'opened-not-empty')
      return this.openedDirectories.includes(this.entity.id) && this.entity.children && this.entity.type === 'folder';

    if (state === 'empty')
      return this.entity.path?.length === 0 && this.entity.type === 'folder';

    if (state === 'empty-opened')
      return this.openedDirectories.includes(this.entity.id) && !this.entity.children && this.entity.type === 'folder';

    if (state === 'closed')
      return !this.openedDirectories.includes(this.entity.id) && this.entity.children && this.entity.type === 'folder';

    if (state === 'file' && this.entity.type === 'file')
      return true;

    else return null;
  }
}
