import { Component, Input, OnInit } from '@angular/core';
import { EntityInterface } from 'src/app/system/types/entity.interface';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  @Input() entity!: EntityInterface;
  @Input() openedDirectories!: string[];
  constructor() { }

  ngOnInit(): void {
  }

  isEntity(state: string) {
    if (state === 'opened-not-empty')
      return this.openedDirectories.includes(this.entity.id) && this.entity.children && this.entity.type === 'folder';

    if (state === 'empty')
      return !this.openedDirectories.includes(this.entity.id) && !this.entity.children && this.entity.type === 'folder';

    if (state === 'empty-opened')
      return this.openedDirectories.includes(this.entity.id) && !this.entity.children && this.entity.type === 'folder';

    if (state === 'closed')
      return !this.openedDirectories.includes(this.entity.id) && this.entity.children && this.entity.type === 'folder';

    if (state === 'file' && this.entity.type === 'file')
      return true;

    else return null;
  }
}
