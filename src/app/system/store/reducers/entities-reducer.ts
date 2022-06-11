import { Action, createReducer, on } from "@ngrx/store";
import { TreeStateInterface } from "../../types/tree-state.interface";
import { getEntitiesAction, getEntitiesFailureAction, getEntitiesSuccessAction } from "../actions/get-entities.actions";

const initialState: TreeStateInterface = {
    isSubmitting: null,
    entities: [],
    error: null,
}

const entitiesReducer = createReducer(
    initialState,
    on(getEntitiesAction,
        (state: TreeStateInterface) => ({
            ...state,
            isSubmitting: true,
            entities: [],
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
            entities: [],
            error: action.error
        })),
);

export function reducer(state: TreeStateInterface, action: Action) {
    return entitiesReducer(state, action);
}