export interface NodeInterface {
    id: string;
    name: string;
    type: string;
    path: string[];
    createdAt: string;
    author: string;
    children: NodeInterface[]
}