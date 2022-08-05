export function addNewEntity(entity: any, entities: any) {
    if (!entities.hasOwnProperty("children"))
        entities = { ...entities, children: [] }

    if (entities.children.length === 0) {
        let node: any = convertToNode(entity);
        [...entities.children, ...node];
    }
    else {
        return addEntity(entity, entities);
    }

    return entities;
}


function addEntity(entity: any, currNode: any) {
    let node: any = convertToNode(entity);

    if (entity.path.length == 0) {
        return { ...currNode, children: [...currNode.children, node] }
    }

    recurs(entity, 0, currNode.children);
    return currNode;
}

function recurs(entity: any, i: any, children: any) {
    children.forEach((child: any) => {
        if (entity.path.length > i + 1)
            return recurs(entity, i + 1, child.children);


        if (entity.path[i] == child.name) {
            let node: any = convertToNode(entity);
            child.children.push(node);
        }
    });
}


function convertToNode(entity: any) {
    return { ...entity, id: entity._id, children: [] };
}