import { createAction } from "@ngrx/store";

export const logoutAction = createAction(
    "[Auth] Logout",
);

export const logoutSuccessAction = createAction(
    "[Auth] Logout success",
);