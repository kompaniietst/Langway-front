import { createAction, props } from "@ngrx/store";
import { ErrorInterface } from "src/app/shared/types/error.interface";
import { TreeInterface } from "../../tree/tree.interface";

export const getEntitiesAction = createAction(
    '[Entities] Get',
);

export const getEntitiesSuccessAction = createAction(
    '[Entities] Get success',
    props<{ entities: TreeInterface }>()
);

export const getEntitiesFailureAction = createAction(
    '[Entities] Get fail',
    props<{ error: ErrorInterface }>()
);