export interface EntityInterface {
    id: string;
    name: string;
    type: string;
    path: string[];
    createdAt: string;
    author: '';
    children?: EntityInterface[];
}