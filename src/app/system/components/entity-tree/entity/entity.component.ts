import { Component, OnInit, Input, Output } from '@angular/core';
import { EntityService } from 'src/app/system/services/entity.service';
import { EntityInterface } from 'src/app/system/types/entity.interface';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  @Input() children: any;

  constructor(private entityService: EntityService) { }

  ngOnInit(): void {}

  activateItem(item: EntityInterface) {
    console.log([...item.path, item.name]);

    this.entityService.entityPathSubject.next([...item.path, item.id]);
  }
}
