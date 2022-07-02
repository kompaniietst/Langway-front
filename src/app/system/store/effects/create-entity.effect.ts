import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, from, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { EntityService } from "../../services/entity.service";
import { EntityInterface } from "../../types/entity.interface";
import { createEntityAction, createEntityFailureAction, createEntitySuccessAction } from "../actions/create-entity.actions";
import { getEntitiesAction } from "../actions/get-entities.actions";
import { entitiesSelector } from "../selectors";

@Injectable()
export class EntityEffect {
    createEntity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createEntityAction),
            switchMap(({ request }) =>
                this.entityService
                    .create(request).pipe(
                        map((entity: EntityInterface) => {
                            this.store.dispatch(getEntitiesAction());
                            return createEntitySuccessAction({ entity })
                        }),
                        catchError((errResp: HttpErrorResponse) =>
                            of(createEntityFailureAction(errResp))
                        )))))

    constructor(
        private actions$: Actions,
        private entityService: EntityService,
        private localstore: LocalStoreService,
        private router: Router,
        private store: Store
    ) { }

    // }





    addEntity$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(createEntityAction),
                withLatestFrom(this.store.select(entitiesSelector)),
                switchMap((entities) => {
                    console.log('entities', entities);
                    return of()
                })
            ),
        // Most effects dispatch another action, but this one is just a "fire and forget" effect
        { dispatch: false }
    );
}

// }