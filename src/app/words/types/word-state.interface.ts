import { ErrorInterface } from "src/app/shared/types/error.interface";
import { WordInterface } from "./word.interface";

export interface WordStateInterface {
    isSubmitting: boolean | null;
    currentWord?: WordInterface | null;
    error: ErrorInterface | null;
    words?: WordInterface[] | null;
}