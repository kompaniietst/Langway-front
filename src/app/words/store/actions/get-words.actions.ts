import { createAction, props } from "@ngrx/store";
import { ErrorInterface } from "src/app/shared/types/error.interface";
import { WordInterface } from "../../types/word.interface";

export const getWordsAction = createAction(
    '[Words] Get',
    props<{ list_id: string }>()
);

export const getWordsSuccessAction = createAction(
    '[Words] Get success',
    props<{ words: WordInterface[] }>()
);

export const getWordsFailureAction = createAction(
    '[Words] Get fail',
    props<{ error: ErrorInterface }>()
);