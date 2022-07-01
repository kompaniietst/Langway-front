import { Action, createReducer, on } from "@ngrx/store";
import { SystemStateInterface } from "../../types/system-state.interface";
import { createEntityAction, createEntityFailureAction } from "../actions/create-entity.actions";
import { removeEntityAction, removeEntityFailureAction, removeEntitySuccessAction } from "../actions/remove-entity.actions";

const initialState: SystemStateInterface = {
    isSubmitting: null,
    currentEntity: null,
    error: null,
}

const removeEntityReducer = createReducer(
    initialState,
    on(removeEntityAction,
        (state: SystemStateInterface) => ({
            ...state,
            // isSubmitting: true,
            // currentEntity: null,
            // error: null
        })),
    on(removeEntitySuccessAction,
        (state: SystemStateInterface, action) => ({
            ...state,
            // isSubmitting: true,
            // currentEntity: null,
            // error: action.error
        })),

    on(removeEntityFailureAction,
        (state: SystemStateInterface) => ({
            ...state,
        }),
    ))

export function reducer(state: SystemStateInterface, action: Action) {
    return removeEntityReducer(state, action);
}