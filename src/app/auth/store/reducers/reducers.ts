import { act } from "@ngrx/effects";
import { Action, on, createReducer } from "@ngrx/store";
import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";
import { LoginAction, LoginFailureAction, LoginSuccessAction } from "../actions/login.actions";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.actions";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    error: null,
}

const authReducer = createReducer(
    initialState,
    on(registerAction,
        (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            currentUser: null,
            error: null
        })),
    on(registerSuccessAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            currentUser: action.currentUser,
            error: null
        })),
    on(registerFailureAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            isSubmitting: false,
            currentUser: null,
            error: action.error
        })),
    on(LoginAction,
        (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            error: null
        })),
    on(LoginSuccessAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            currentUser: action.currentUser,
            error: null
        })),
    on(LoginFailureAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            error: action.error,
        })),
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}