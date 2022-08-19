import { Action, createReducer, on } from "@ngrx/store";
import { TreeStateInterface } from "../../types/tree-state.interface";
import { createEntitySuccessAction } from "../actions/create-entity.actions";
import { getEntitiesAction, getEntitiesFailureAction, getEntitiesSuccessAction } from "../actions/get-entities.actions";
import { addEntity } from "./updateTree";

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
                entities: addEntity(action.entity, state.entities),
                error: null
            }
        }),
);

export function reducer(state: TreeStateInterface, action: Action) {
    return entitiesReducer(state, action);
}