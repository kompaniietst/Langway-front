import { createAction, props } from "@ngrx/store";

export const removeEntityAction = createAction(
    '[Entity] Remove',
    props<{ id: string }>()
);

export const removeEntitySuccessAction = createAction(
    '[Entity] Remove success',
);

export const removeEntityFailureAction = createAction(
    '[Entity] Remove fail',
);