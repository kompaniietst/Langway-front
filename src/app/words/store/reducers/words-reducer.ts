import { Action, createReducer, on } from "@ngrx/store";
import { ErrorInterface } from "src/app/shared/types/error.interface";
import { WordInterface } from "../../types/word.interface";
import { getWordsAction, getWordsFailureAction, getWordsSuccessAction } from "../actions/get-words.actions";

export interface WordsState {
    isSubmitting: boolean | null;
    error: ErrorInterface | null;
    words: WordInterface[] | null;
}

const initialState: WordsState = {
    isSubmitting: null,
    words: null,
    error: null,
}

const wordsReducer = createReducer(
    initialState,
    on(getWordsAction,
        (state: WordsState) => ({
            ...state,
            isSubmitting: true,
            words: null,
            error: null
        })),
    on(getWordsSuccessAction,
        (state: WordsState, action) => {
            return {
                ...state,
                isSubmitting: true,
                words: action.words,
                error: null
            }
        }),
    on(getWordsFailureAction,
        (state: WordsState, action) => ({
            ...state,
            isSubmitting: true,
            words: null,
            error: action.error
        })),
);

export function reducer(state: WordsState, action: Action) {
    return wordsReducer(state, action);
}