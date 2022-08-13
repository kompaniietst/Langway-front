import { Action, createReducer, on } from "@ngrx/store";
import { WordStateInterface } from "../../types/word-state.interface";
import { createWordAction, createWordFailureAction, createWordSuccessAction } from "../actions/create-word.actions";

const initialState: WordStateInterface = {
    isSubmitting: null,
    currentWord: null,
    error: null,
}

const createWordReducer = createReducer(
    initialState,
    on(createWordAction,
        (state: WordStateInterface) => ({
            ...state,
            isSubmitting: true,
            currentWord: null,
            error: null
        })),

    on(createWordSuccessAction,
        (state: WordStateInterface, action) => ({
            ...state,
            isSubmitting: true,
            currentWord: action.word,
            error: null
        })),

    on(createWordFailureAction,
        (state: WordStateInterface, action) => ({
            ...state,
            isSubmitting: true,
            currentWord: null,
            error: action.error
        })),
);

export function reducer(state: WordStateInterface, action: Action) {
    return createWordReducer(state, action);
}