import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WordStateInterface } from "../types/word-state.interface";
import { WordsState } from "./reducers/words-reducer";

export const wordFeatureSelector = createFeatureSelector<WordStateInterface>('entity');

export const isSubmittingSelector = createSelector
    (wordFeatureSelector, (entityState: WordStateInterface) => entityState.isSubmitting);

export const wordsSelector = createSelector
    (createFeatureSelector<WordsState>('words'),
        (wordsState: WordsState) => wordsState.words);

