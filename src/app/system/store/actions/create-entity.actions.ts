import { createAction, props } from "@ngrx/store";
import { ErrorInterface } from "src/app/shared/types/error.interface";
import { EntityRequestInterface } from "../../types/entity-request.interface";
import { EntityInterface } from "../../types/entity.interface";

export const createEntityAction = createAction(
    '[Entity] Create',
    props<{ request: EntityRequestInterface }>()
);

export const createEntitySuccessAction = createAction(
    '[Entity] Create success',
    props<{ entity: EntityInterface }>()
);

export const createEntityFailureAction = createAction(
    '[Entity] Create fail',
    props<{ error: ErrorInterface }>()
);