import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { ErrorInterface } from "src/app/shared/types/error.interface";

export interface AuthStateInterface {
    isSubmitting: boolean | null;
    currentUser: CurrentUserInterface | null;
    isLoggedIn: boolean | null;
    error: ErrorInterface | null;
}