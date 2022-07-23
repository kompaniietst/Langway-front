import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { EntityService } from '../../services/entity.service';
import { createEntityAction } from '../../store/actions/create-entity.actions';
import { getEntitiesAction } from '../../store/actions/get-entities.actions';
import { errorSelector } from '../../store/selectors';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss']
})
export class AddEntityComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean | null>;
  error$!: Observable<any>;
  path: string[] = [];

  constructor(private store: Store, private entityService: EntityService) {

    this.entityService.entityPathSubject
      .subscribe((path: string[]) => {
        this.path = path
      });
  }

  ngOnInit(): void {
    this.initForm();
    this.error$ = this.store.select(errorSelector);
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('test'),
      type: new FormControl("folder"),
    });
  }

  onSubmit(): void {
    this.form.addControl("path", new FormControl(this.path));
    const request = this.form.value;

    this.store.dispatch(
      createEntityAction({ request: request }));

    this.initForm();
  }



  arr = [
    { id: "folder1", name: "folder1", type: "folder", path: [] },
    { id: "file1.0", name: "file5", type: "file", path: [] },
    { id: "folder1.1", name: "folder1.1", type: "folder", path: ["folder1"] },
    { id: "file1", name: "file1", type: "file", path: ["folder1"] },
    { id: "file2", name: "file2", type: "file", path: ["folder1"] },
    { id: "folder1.1.1", name: "folder1.1.1", type: "folder", path: ["folder1", "folder1.1"] },
    { id: "file5", name: "file5", type: "file", path: [] },
    { id: "folder6", name: "folder6", type: "folder", path: [] },
    { id: "folder10", name: "folder10", type: "folder", path: ["folder6"] }

  ]

  entities: any = { id: '', name: '', type: '', path: '', createdAt: '', author: '' };

  click() {
    this.arr.forEach(element => {
      if (!this.entities.hasOwnProperty("children"))
        this.entities = { ... this.entities, children: [] }

      if (this.entities.children.length === 0) {
        let node: any = convertToNode(element);
        this.entities.children.push(node);
      }
      else
        addEntity(element, this.entities);
    });

    // const newEntity = { id: "folder1.1.2", name: "folder1.1.2", type: "folder", path: ["folder1", "folder1.1"] };
    // addEntity(newEntity, this.entities);


    console.log(this.entities);
  }
}



export function addEntity(entity: any, currNode: any) {
  let node: any = convertToNode(entity);

  entity.path.length == 0
    ? currNode.children.push(node)
    : recurs(entity, 0, currNode.children);

  return currNode;
}


export function recurs(entity: any, i: any, children: any) {
  children.forEach((child: any) => {
    if (entity.path.length > i + 1)
      return recurs(entity, i + 1, child.children);


    if (entity.path[i] == child.name) {
      let node: any = convertToNode(entity);
      child.children.push(node);
    }
  });
}




export function convertToNode(entity: any) {
  return { ...entity, children: [] };
}

// export function addEntity(entity: any, entities: any) {