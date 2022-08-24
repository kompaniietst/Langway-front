import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EntityService } from 'src/app/system/services/entity.service';
import { EntityInterface } from 'src/app/system/types/entity.interface';
import { removeEntityAction } from '../../store/actions/remove-entity.actions';
import { currentEntitySelector } from '../../store/selectors';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  @Input() children: any;
  // Todo: make Behavior subj, move logic to the service
  openedDirectories: string[] = [];

  constructor(private entityService: EntityService, private router: Router, private store: Store) { }

  ngOnInit(): void {
    console.log('children', this.children);

    this.children.forEach((child: EntityInterface) => {
      this.openedDirectories.push(child.id);
    });

    // Todo: make Behavior subj, move logic to the service
    this.store.select(currentEntitySelector)
      .subscribe((x: any) => {
        if (!this.openedDirectories.includes(x?.id)) {
          this.openedDirectories.push(x?.id);
          return;
        }
      });
  }

  activateItem(item: EntityInterface) {
    if (item.type === 'file')
      this.openList(item.id);

    this.entityService.entityPathSubject.next([...item.path, item.id]);

    if (!this.openedDirectories.includes(item.id)) {
      this.openedDirectories.push(item.id);
      return;
    }

    const i = this.openedDirectories.indexOf(item.id);
    this.openedDirectories.splice(i, 1);
  }

  openList(id: string) {
    this.router.navigate([`/entities/list/${id}`]);
  }

  onRemove(id: string) {
    this.store.dispatch(removeEntityAction({id}));
  }

  onEdit(id: string) {
    console.log('ed');
  }
}
