import { createAction, props } from "@ngrx/store";
import { ErrorInterface } from "src/app/shared/types/error.interface";
import { WordRequestInterface } from "../../types/word-request.interface";
import { WordInterface } from "../../types/word.interface";

export const createWordAction = createAction(
    '[Word] Create',
    props<{ request: WordRequestInterface }>()
);

export const createWordSuccessAction = createAction(
    '[Word] Create success',
    props<{ word: WordInterface }>()
);

export const createWordFailureAction = createAction(
    '[Word] Create fail',
    props<{ error: ErrorInterface }>()
);