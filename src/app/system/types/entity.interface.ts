import { UserInterface } from "src/app/shared/types/user.interface";
import { EntityTypeInterface } from "./entity-type.interface";

export interface EntityInterface {
    id: string;
    type: EntityTypeInterface;
    name: string;
    createdAt: string;
    author: UserInterface;
}