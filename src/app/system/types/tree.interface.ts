import { EntityInterface } from "./entity.interface";

export interface TreeInterface {
    id: string;
    name: string;
    type: string;
    path: string[];
    createdAt: string;
    author: string;
    children: EntityInterface[];
}