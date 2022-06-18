import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { AuthService } from "../../services/auth.service";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.actions";

@Injectable()
export class LoginEffect {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(({ request }) =>
                this.authService
                    .login(request).pipe(
                        map((currentUser: CurrentUserInterface) => {
                            this.localstore.set("token", currentUser.token);
                            return loginSuccessAction({ currentUser });
                        }),
                        catchError((errResp: HttpErrorResponse) =>
                            of(loginFailureAction(errResp))
                        )
                    )
            ),
            ofType(loginSuccessAction),
            tap(() => this.router.navigateByUrl('/entities'))))

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private localstore: LocalStoreService,
        private router: Router
    ) { }
}