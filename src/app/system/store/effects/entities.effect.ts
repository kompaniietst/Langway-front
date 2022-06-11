import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { EntityService } from "../../services/entity.service";
import { EntityInterface } from "../../types/entity.interface";
import { createEntityAction, createEntityFailureAction, createEntitySuccessAction } from "../actions/create-entity.actions";
import { getEntitiesAction, getEntitiesFailureAction, getEntitiesSuccessAction } from "../actions/get-entities.actions";

@Injectable()
export class EntitiesEffect {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getEntitiesAction),
            switchMap(() =>
                this.entityService
                    .getEntities().pipe(
                        map((entities: EntityInterface[]) => {
                            return getEntitiesSuccessAction({ entities })
                        }),
                        catchError((errResp: HttpErrorResponse) =>
                            of(getEntitiesFailureAction(errResp))
                        )))))

    constructor(
        private actions$: Actions,
        private entityService: EntityService,
        private localstore: LocalStoreService,
        private router: Router
    ) { }
}