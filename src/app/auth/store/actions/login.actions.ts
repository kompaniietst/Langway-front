import { createAction, props } from "@ngrx/store";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { ErrorInterface } from "src/app/shared/types/error.interface";
import { LoginRequestInterface } from "../../types/login-request.interface";

export const LoginAction = createAction(
    "[Auth] Login",
    props<{ request: LoginRequestInterface }>()
);

export const LoginSuccessAction = createAction(
    "[Auth] Login success",
    props<{ currentUser: CurrentUserInterface }>()
);

export const LoginFailureAction = createAction(
    "[Auth] Login fail",
    props<{ error: ErrorInterface }>()
);