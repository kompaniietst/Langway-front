import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EntityService } from 'src/app/system/services/entity.service';
import { EntityInterface } from 'src/app/system/types/entity.interface';
import { removeEntityAction } from '../../store/actions/remove-entity.actions';
import { currentEntitySelector } from '../../store/selectors';


interface Tree {
	root: TreeNode;
}
 
interface TreeNode {
	label: string;
	children: TreeNode[];
}

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  @Input() children: any;
  activeEntityId!: string;

  ////
  public data!: Tree;
  public selectedTreeNode!: TreeNode | null;


  constructor(private entityService: EntityService, private router: Router, private store: Store) { 
    this.selectedTreeNode = null;
		this.data = {
			root: {
				label: "first",
				children: [
					{
						label: "second-a",
						children: [
							{
								label: "third-first",
								children: [
									{
										label: "ferth",
										children: [
											{
												label: "fiver",
												children: []
											}
										]
									}
								]
							}
						]
					},
					{
						label: "second-b",
						children: [
							{
								label: "third",
								children: []
							}
						]
					}
				]
			}
		}
 


  }


  // ---
	// PUBLIC METHODS.
	// ---
 
	// I select the given tree node, and log it to the console.
	public selectNode( item: any ) : void {
 
		console.log('item',item);
    
 
		// console.group( "Selected Tree Node" );
		// console.log( "Label:", node.label );
		// console.log( "Children:", node.children.length );
		// console.groupEnd();
 
	}
 


  ngOnInit(): void {

    this.children.forEach((child: EntityInterface) => {
      // console.log('child', child);
    });

    this.store.select(currentEntitySelector)
      .subscribe((entity: any) => {
        if (entity) {
          this.activeEntityId = entity.id;
          this.entityService.openedDirectoriesSubject.next([entity.id]);
        }
      });
  }

  // activateItem(item: EntityInterface): any | string[] | undefined {
  //   debugger;
  //   if (item.type === 'file')
  //     this.openList(item.id);


  // if (!this.openedDirectories.includes(item.id)) {
  //   this.openedDirectories.push(item.id);
  //   // this.entityService.entityPathSubject.next([...item.path, item.id]);
  //   return this.openedDirectories;
  // }

  // const i = this.openedDirectories.indexOf(item.id);
  // this.openedDirectories.splice(i, 1);
  // return this.openedDirectories;
  // this.entityService.entityPathSubject.next([...item.path, item.id]);
  // }

  openList(id: string) {
    this.router.navigate([`/entities/list/${id}`]);
  }

  onRemove(id: string) {
    this.store.dispatch(removeEntityAction({ id }));
  }

  onEdit(id: string) {
    console.log('ed');
  }

  selectActiveItem(item: EntityInterface) {
    console.log(item.id);
    this.activeEntityId = item.id;
    this.entityService.entityPathSubject.next([...item.path, item.id]);
  }
}
