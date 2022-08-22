import { Node } from "./node";
import { NodeInterface } from "./node.interface";
import { TreeInterface } from "./tree.interface";

export class Tree extends Node implements TreeInterface {
    insert(node: NodeInterface) {
        let tree = this;

        if (node.path.length === 0) {
            tree.children.push(node);
            return tree;
        }

        return this.appendToChildren(tree, node, 0);
    }

    appendToChildren(tree: TreeInterface, node: NodeInterface, i: number) {
        tree.children.forEach((child: NodeInterface) => {
            if (!node.path.includes(child.id)) return;

            return node.path.length === i + 1
                ? child.children.push(node)
                : this.appendToChildren(child, node, i + 1);
        })

        return tree;
    }
}