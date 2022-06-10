import { Action, createReducer, on } from "@ngrx/store";
import { SystemStateInterface } from "../../types/system-state.interface";
import { createEntityAction, createEntityFailureAction } from "../actions/create-entity.actions";

const initialState: SystemStateInterface = {
    isSubmitting: null,
    currentEntity: null,
    error: null,
}

const entityReducer = createReducer(
    initialState,
    on(createEntityAction,
        (state: SystemStateInterface) => ({
            ...state,
            isSubmitting: true,
            currentEntity: null,
            error: null
        })),
    on(createEntityFailureAction,
        (state: SystemStateInterface, action) => ({
            ...state,
            isSubmitting: true,
            currentEntity: null,
            error: action.error
        })),
    // on(registerSuccessAction,
    //     (state: AuthStateInterface, action) => ({
    //         ...state,
    //         currentUser: action.currentUser,
    //         error: null
    //     })),
    // on(registerFailureAction,
    //     (state: AuthStateInterface, action) => ({
    //         ...state,
    //         currentUser: null,
    //         error: action.error
    //     })),
    // on(loginAction,
    //     (state: AuthStateInterface) => ({
    //         ...state,
    //         isSubmitting: true,
    //         isLoggedIn: false,
    //         error: null
    //     })),
    // on(loginSuccessAction,
    //     (state: AuthStateInterface, action) => ({
    //         ...state,
    //         currentUser: action.currentUser,
    //         isLoggedIn: true,
    //         error: null
    //     })),
    // on(loginFailureAction,
    //     (state: AuthStateInterface, action) => ({
    //         ...state,
    //         isLoggedIn: false,
    //         error: action.error,
    //     })),
    // on(getCurrentUserAction,
    //     (state: AuthStateInterface) => ({
    //         ...state,
    //     })),
    // on(getCurrentUserSuccessAction,
    //     (state: AuthStateInterface, action) => ({
    //         ...state,
    //         currentUser: action.currentUser,
    //         isLoggedIn: true,
    //     })),
    // on(getCurrentUserFailureAction,
    //     (state: AuthStateInterface) => ({
    //         ...state,
    //         currentUser: null,
    //         isLoggedIn: false
    //     })),
    // on(logoutAction,
    //     (state: AuthStateInterface) => ({
    //         ...state,
    //         currentUser: null
    //     })),

);

export function reducers(state: SystemStateInterface, action: Action) {
    return entityReducer(state, action);
}