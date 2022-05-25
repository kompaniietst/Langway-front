import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, of, retry, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.actions";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }) => {
                return this.authService.register(request)
                    .pipe(
                        map((currentUser: CurrentUserInterface) => {
                            return registerSuccessAction({ currentUser })
                        }),
                        catchError((errResp: HttpErrorResponse) => {
                            return of(registerFailureAction(errResp))
                        })
                    )
            })
        )
    )

    constructor(private actions$: Actions, private authService: AuthService) { }
}