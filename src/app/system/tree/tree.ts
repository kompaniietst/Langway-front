import { Node } from "./node";
import { NodeInterface } from "./node.interface";
import { TreeInterface } from "./tree.interface";

export class Tree extends Node implements TreeInterface {
    insert(node: NodeInterface) {
        // debugger;
        let tree = this;

        if (node.path.length === 0) {
            tree.children.push(node);
            return tree;
        }

        // console.log('final ', this.appendToChildren(tree, node, 0));
        
        return this.appendToChildren(tree, node, 0);
    }

    appendToChildren(tree: TreeInterface, node: NodeInterface, i: number) {
        tree.children.forEach((child: NodeInterface) => {
            if (!child.children) child["children"] = [];
            if (!node.path.includes(child.id)) return;

            console.log('child', child);
            

            return node.path.length === i + 1
                ? child.children.push(node)
                : this.appendToChildren(child, node, i + 1);
        })

        console.log('TREE ', tree);
        
        return tree;
    }
}