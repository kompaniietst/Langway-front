import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { AuthService } from "../../services/auth.service";
import { LoginAction, LoginFailureAction, LoginSuccessAction } from "../actions/login.actions";

@Injectable()
export class LoginEffect {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginAction),
            switchMap(({ request }) => {
                return this.authService.login(request)
                    .pipe(
                        map((currentUser: CurrentUserInterface) => {
                            console.log('curr', currentUser);
                            
                            return LoginSuccessAction({ currentUser });
                        }),
                        catchError((errResp: HttpErrorResponse) =>
                            { console.log(errResp);
                             ;return of(LoginFailureAction(errResp))})
                    )
            })
        )
    )

    constructor(private actions$: Actions, private authService: AuthService) { }
}