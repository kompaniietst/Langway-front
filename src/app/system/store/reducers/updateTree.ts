export function addEntity(entity: any, entities: any) {
    console.log('e', entities);
    
    
    let isEmptyTree = entities?.children?.length === 0;

    let node: any = convertToNode(entity);

    if (!isEmptyTree) {
        entities = { ...entities, children: [] }

        return { ...entities, children: [...entities?.children, node] || [] };
    }
    else {
        if (entity.path.length == 0) {
            return { ...entities, children: [...entities.children, node] }
        }

        recurs(entity, 0, entities.children);
        return entities;
    }
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