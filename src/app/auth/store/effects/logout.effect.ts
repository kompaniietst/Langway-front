import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap } from "rxjs";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { logoutAction, logoutSuccessAction } from "../actions/logout.action";

@Injectable()
export class LogoutEffect {
    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logoutAction),
            switchMap(() => {
                this.localstore.remove();
                return of(logoutSuccessAction());
            })))

    constructor(
        private actions$: Actions,
        private localstore: LocalStoreService,
    ) { }
}