import { NodeInterface } from "./node.interface";

export class Node implements NodeInterface {
    id!: string;
    name!: string;
    type!: string;
    path!: string[];
    createdAt!: string;
    author!: string;
    children: Node[];

    constructor({ id, name, type, path, createdAt, author, children }: Node) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.path = path;
        this.createdAt = createdAt;
        this.author = author;
        this.children = children || [];
    }
}