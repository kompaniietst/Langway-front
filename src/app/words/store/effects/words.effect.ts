import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { WordService } from "../../services/word.service";
import { WordInterface } from "../../types/word.interface";
import { getWordsAction, getWordsFailureAction, getWordsSuccessAction } from "../actions/get-words.actions";

@Injectable()
export class WordsEffect {
    getWords$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getWordsAction),
            switchMap(({ list_id }) => {
                return this.wordService
                    .getWords(list_id).pipe(
                        map((words: WordInterface[]) => {
                            return getWordsSuccessAction({ words })
                        }),
                        catchError((errResp: HttpErrorResponse) =>
                            of(getWordsFailureAction(errResp))
                        ))
            }

            )))

    constructor(
        private actions$: Actions,
        private wordService: WordService,
    ) { }
}