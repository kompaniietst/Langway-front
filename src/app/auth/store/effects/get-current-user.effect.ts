import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { AuthService } from "../../services/auth.service";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/current-user.action";

@Injectable()
export class GetCurrentUserEffect {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCurrentUserAction),
            switchMap(() =>
                this.authService
                    .getCurrentUser().pipe(
                        map((currentUser: CurrentUserInterface) => {
                            const token = this.localstore.get("token");
                            return token
                                ? getCurrentUserSuccessAction({ currentUser })
                                : getCurrentUserFailureAction()
                        }),
                        catchError(() =>
                            of(getCurrentUserFailureAction())
                        )))))

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private localstore: LocalStoreService,
    ) { }
}