import { Action, on, createReducer } from "@ngrx/store";
import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.actions";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.actions";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/current-user.action";
import { logoutAction } from "../actions/logout.action";

const initialState: AuthStateInterface = {
    isSubmitting: null,
    currentUser: null,
    isLoggedIn: null,
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
        (state: AuthStateInterface) => ({
            ...state,
            error: null
        })),
    on(registerFailureAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            currentUser: null,
            error: action.error
        })),
    on(loginAction,
        (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            isLoggedIn: false,
            error: null
        })),
    on(loginSuccessAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            currentUser: action.currentUser,
            isLoggedIn: true,
            error: null
        })),
    on(loginFailureAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            isLoggedIn: false,
            error: action.error,
        })),
    on(getCurrentUserAction,
        (state: AuthStateInterface) => ({
            ...state,
        })),
    on(getCurrentUserSuccessAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            currentUser: action.currentUser,
            isLoggedIn: true,
        })),
    on(getCurrentUserFailureAction,
        (state: AuthStateInterface) => ({
            ...state,
            currentUser: null,
            isLoggedIn: false
        })),
    on(logoutAction,
        (state: AuthStateInterface) => ({
            ...state,
            currentUser: null
        })),

);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}