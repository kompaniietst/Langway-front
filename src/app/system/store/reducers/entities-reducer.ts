import { Action, createReducer, on } from "@ngrx/store";
import { EntityInterface } from "../../types/entity.interface";
import { SystemStateInterface } from "../../types/system-state.interface";
import { TreeStateInterface } from "../../types/tree-state.interface";
import { createEntitySuccessAction } from "../actions/create-entity.actions";
import { getEntitiesAction, getEntitiesFailureAction, getEntitiesSuccessAction } from "../actions/get-entities.actions";

const initialState: TreeStateInterface = {
    isSubmitting: null,
    entities: null,
    error: null,
}

const entitiesReducer = createReducer(
    initialState,
    on(getEntitiesAction,
        (state: TreeStateInterface) => ({
            ...state,
            isSubmitting: true,
            entities: null,
            error: null
        })),
    on(getEntitiesSuccessAction,
        (state: TreeStateInterface, action) => ({
            ...state,
            isSubmitting: true,
            entities: action.entities,
            error: null
        })),
    on(getEntitiesFailureAction,
        (state: TreeStateInterface, action) => ({
            ...state,
            isSubmitting: true,
            entities: null,
            error: action.error
        })),
    on(createEntitySuccessAction,
        (state: any, action) => {
            console.log(state);
            return {
                ...state,
                isSubmitting: true,
                currentEntity: action.entity,
                entities: click(action.entity, state.entities),
                error: null
            }
        }),
);

export function reducer(state: TreeStateInterface, action: Action) {
    return entitiesReducer(state, action);
}

export function click (entity: any, entities: any) {
    if (!entities.hasOwnProperty("children"))
        entities = { ... entities, children: [] }

    if (entities.children.length === 0) {
        let node: any = convertToNode(entity);
        entities.children.push(node);
      }
      else {
          addEntity(entity, entities);
      }

    console.log('entities', entities);
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


  

// let arr = [
//     { id: "folder1", name: "folder1", type: "folder", path: [] },
//     // { id: "folder1.1", name: "folder1.1", type: "folder", path: ["folder1"] },
//     // { id: "file1", name: "file1", type: "file", path: ["folder1"] },
//     // { id: "file2", name: "file2", type: "file", path: ["folder1"] },
//     // { id: "folder1.1.1", name: "folder1.1.1", type: "folder", path: ["folder1", "folder1.1"] },
//     // { id: "file5", name: "file5", type: "file", path: [] },
//     // { id: "folder6", name: "folder6", type: "folder", path: [] },
//     // { id: "folder10", name: "folder10", type: "folder", path: ["folder6"] }

// ]

// export function addEntity(currentEntity: EntityInterface, entities: any) {
    
//     Object.preventExtensions(entities)

//     console.clear();
//     console.log('e', currentEntity ,entities);
    
//     let currNode = { ...arr[0], children: [] };
    
//     if(!entities?.children) {
//         // 'use strict';
//         entities["children"] = [];
//         entities.children.push(currNode);
//         // entities = [...entities.children : currNode];
//         return;
//     }


//     if (currNode.path.length === 0) {
//     //     // 'use strict';
//         entities.children = [...entities.children, currNode];
//         return;
//     }

//     console.table(entities);

//     /* console.log('ENTITIE: ', currentEntity, entities);
//     let currNode = { ...currentEntity, children: [] };

//     if (currNode.path.length === 0) {
//         'use strict';
//         entities["children"].push(currNode);
//         return;
//     }


//     return recursion(currNode.path, currNode, entities);*/

// }

// export function recursion(path: string[], currNode: any, entities: any) {

    











//     // return entities;

//     // children.forEach((child: any) => {

//     //     if (pathElm === child.id) {

//     //         if (path.length != path.indexOf(pathElm) + 1) {
//     //             let nextPathElem = path.indexOf(pathElm) + 1;
//     //             if (!child.children) child.children = [];

//     //             recursion(path[nextPathElem], child.children);
//     //             return;
//     //         }

//     //         if (!child.children)
//     //             child.children = [];
//     //         child.children.push(new Node(id, name, type, path));
//     //     }
//     // })
// }

// }