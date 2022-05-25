import { Action, on, createReducer } from "@ngrx/store";
import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";
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
            isSubmitting: true
        })),
    on(registerSuccessAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            currentUser: action.currentUser
        })),
    on(registerFailureAction,
        (state: AuthStateInterface, action) => {
            console.log('in reducer ac', action);

            return {
                ...state,
                isSubmitting: false,
                currentUser: null,
                error: action.error
            }
        }
    ));


export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}