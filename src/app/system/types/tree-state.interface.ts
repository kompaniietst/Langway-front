import { ErrorInterface } from "src/app/shared/types/error.interface";
import { EntityInterface } from "./entity.interface";

export interface TreeStateInterface {
    isSubmitting: boolean | null;
    entities: EntityInterface[];
    error: ErrorInterface | null;
}