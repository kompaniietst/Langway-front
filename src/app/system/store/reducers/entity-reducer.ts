import { Action, createReducer, on } from "@ngrx/store";
import { SystemStateInterface } from "../../types/system-state.interface";
import { createEntityAction, createEntityFailureAction } from "../actions/create-entity.actions";

const initialState: SystemStateInterface = {
    isSubmitting: null,
    currentEntity: null,
    error: null,
}

const entityReducer = createReducer(
    initialState,
    on(createEntityAction,
        (state: SystemStateInterface) => ({
            ...state,
            isSubmitting: true,
            currentEntity: null,
            error: null
        })),
    on(createEntityFailureAction,
        (state: SystemStateInterface, action) => ({
            ...state,
            isSubmitting: true,
            currentEntity: null,
            error: action.error
        })),
);

export function reducer(state: SystemStateInterface, action: Action) {
    return entityReducer(state, action);
}