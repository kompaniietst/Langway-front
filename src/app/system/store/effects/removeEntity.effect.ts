import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { EntityService } from "../../services/entity.service";
import { EntityInterface } from "../../types/entity.interface";
import { createEntityAction, createEntityFailureAction, createEntitySuccessAction } from "../actions/create-entity.actions";
import { removeEntityAction } from "../actions/remove-entity.actions";

@Injectable()
export class EntityEffect {
    removeEntity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(removeEntityAction),
            // switchMap(({ id }) =>
            //     this.entityService
            //         .removeEntity.pipe(
            //             map((entity: EntityInterface) => {
            //                 return createEntitySuccessAction({ entity })
            //             }),
            //             catchError((errResp: HttpErrorResponse) =>
            //                 of(createEntityFailureAction(errResp))
            //             )))))
        ))
    constructor(
        private actions$: Actions,
        private entityService: EntityService,
        private localstore: LocalStoreService,
        private router: Router
    ) { }
}