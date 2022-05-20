import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../../types/register-request.interface";

export const registerAction = createAction(
    '[Auth] Register',
    props<RegisterRequestInterface>()
);