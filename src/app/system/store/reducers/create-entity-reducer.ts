import { Action, createReducer, on, Store } from "@ngrx/store";
import { SystemStateInterface } from "../../types/system-state.interface";
import { createEntityAction, createEntityFailureAction, createEntitySuccessAction } from "../actions/create-entity.actions";
import { removeEntityAction, removeEntityFailureAction } from "../actions/remove-entity.actions";

const initialState: SystemStateInterface = {
    isSubmitting: null,
    currentEntity: null,
    error: null,
    entities: null
}

const createEntityReducer = createReducer(
    initialState,
    on(createEntityAction,
        (state: SystemStateInterface) => ({
            ...state,
            isSubmitting: true,
            currentEntity: null,
            error: null
        })),

    on(createEntitySuccessAction,
        (state: SystemStateInterface, action) => ({
            ...state,
            isSubmitting: true,
            currentEntity: action.entity,
            error: null
        })),

    on(createEntityFailureAction,
        (state: SystemStateInterface, action) => ({
            ...state,
            isSubmitting: true,
            currentEntity: null,
            error: action.error
        })),

    on(removeEntityAction,
        (state: SystemStateInterface) => ({
            ...state,
        }),
    ))

export function reducer(state: SystemStateInterface, action: Action) {
    return createEntityReducer(state, action);
}