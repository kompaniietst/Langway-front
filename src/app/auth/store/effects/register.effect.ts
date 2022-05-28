import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, of, retry, switchMap, tap } from "rxjs";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.actions";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }) =>
                this.authService
                    .register(request).pipe(
                        map((currentUser: CurrentUserInterface) => {
                            this.localstore.set("token", currentUser.token);
                            return registerSuccessAction({ currentUser })
                        }),
                        catchError((errResp: HttpErrorResponse) =>
                            of(registerFailureAction(errResp))
                        )
                    )
            ),
            ofType(registerSuccessAction),
            tap(() => this.router.navigateByUrl('/'))))

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private localstore: LocalStoreService,
        private router: Router
    ) { }
}