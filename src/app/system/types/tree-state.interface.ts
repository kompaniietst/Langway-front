import { ErrorInterface } from "src/app/shared/types/error.interface";
import { EntityInterface } from "./entity.interface";
import { TreeInterface } from "./tree.interface";

export interface TreeStateInterface {
    isSubmitting: boolean | null;
    entities: TreeInterface | null;
    error: ErrorInterface | null;
}