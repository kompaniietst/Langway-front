import { createAction, props } from "@ngrx/store";
import { ErrorInterface } from "src/app/shared/types/error.interface";
import { EntityInterface } from "../../types/entity.interface";

export const getEntitiesAction = createAction(
    '[Entities] Get',
);

export const getEntitiesSuccessAction = createAction(
    '[Entities] Get success',
    props<{ entities: EntityInterface }>()
);

export const getEntitiesFailureAction = createAction(
    '[Entities] Get fail',
    props<{ error: ErrorInterface }>()
);