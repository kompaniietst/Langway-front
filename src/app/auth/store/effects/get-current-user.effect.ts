import { Injectable } from "@angular/core";
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
            switchMap(() => {
                const token = this.localstore.get("token");
                console.log(token);
                

                if (!token)
                    return of(getCurrentUserFailureAction());

                return this.authService
                    .getCurrentUser().pipe(
                        map((currentUser: CurrentUserInterface) => {
                            return getCurrentUserSuccessAction({ currentUser })
                        }),
                        catchError(() =>
                            of(getCurrentUserFailureAction())
                        ))
            })))

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private localstore: LocalStoreService,
    ) { }
}