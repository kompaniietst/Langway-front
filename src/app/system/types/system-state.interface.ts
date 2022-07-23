import { ErrorInterface } from "src/app/shared/types/error.interface";
import { EntityInterface } from "./entity.interface";

export interface SystemStateInterface {
    isSubmitting: boolean | null;
    currentEntity: EntityInterface | null;
    error: ErrorInterface | null;
    entities?: SystemStateInterface | null
}