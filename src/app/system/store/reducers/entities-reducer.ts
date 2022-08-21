import { Action, createReducer, on } from "@ngrx/store";
import { TreeStateInterface } from "../../types/tree-state.interface";
import { createEntitySuccessAction } from "../actions/create-entity.actions";
import { getEntitiesAction, getEntitiesFailureAction, getEntitiesSuccessAction } from "../actions/get-entities.actions";
import { Tree } from "../../tree/tree";
import { Node } from "../../tree/node";

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
            let tree = new Tree(JSON.parse(JSON.stringify(state.entities)));
            let node = new Node({ ...action.entity, children: [] });

            return {
                ...state,
                isSubmitting: true,
                currentEntity: action.entity,
                entities: tree.insert(node),
                error: null
            }
        }),
);

export function reducer(state: TreeStateInterface, action: Action) {
    return entitiesReducer(state, action);
}