import { createAction, props } from "@ngrx/store";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { ErrorInterface } from "src/app/shared/types/error.interface";
import { RegisterRequestInterface } from "../../types/register-request.interface";

export const registerAction = createAction(
    '[Auth] Register',
    props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
    '[Auth] Register success',
    props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
    '[Auth] Register fail',
    props<{error: ErrorInterface}>()
);