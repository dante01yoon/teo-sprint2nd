export interface Node {
    
}

export interface Recommend  {
    id: number,
    userName: string,
    description: object,
    favorite: number,
    share: number,
    nodes: Array<Node>,
    develop: number, //0: FE, 1: BE, 2: DevOps
}