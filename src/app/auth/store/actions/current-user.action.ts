import { createAction, props } from "@ngrx/store";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { ErrorInterface } from "src/app/shared/types/error.interface";

export const getCurrentUserAction = createAction(
    "[Auth] Get Current user"
)

export const getCurrentUserSuccessAction = createAction(
    "[Auth] Get Current user success",
    props<{ currentUser: CurrentUserInterface }>()
)

export const getCurrentUserFailureAction = createAction(
    "[Auth] Get Current user failure"
)