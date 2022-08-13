import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { WordService } from "../../services/word.service";
import { WordInterface } from "../../types/word.interface";
import { createWordAction, createWordFailureAction, createWordSuccessAction } from "../actions/create-word.actions";

@Injectable()
export class CreateWordEffect {
    createEntity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createWordAction),
            switchMap(({ request }) =>
                this.wordService
                    .create(request).pipe(
                        map((word: WordInterface) => {
                            return createWordSuccessAction({ word })
                        }),
                        catchError((errResp: HttpErrorResponse) =>
                            of(createWordFailureAction(errResp))
                        )))))

    constructor(
        private actions$: Actions,
        private wordService: WordService,
    ) { }
}