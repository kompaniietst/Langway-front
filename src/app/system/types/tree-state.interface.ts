import { ErrorInterface } from "src/app/shared/types/error.interface";
import { TreeInterface } from "../tree/tree.interface";

export interface TreeStateInterface {
    isSubmitting: boolean | null;
    entities: TreeInterface | null;
    error: ErrorInterface | null;
}