import { FlowGraphDatum } from "@ant-design/graphs";

export interface Node {
    
}

export interface Recommend  {
    id: number,
    userName: string,
    description: number,
    favorite: number,
    share: number,
    nodes: FlowGraphDatum,
    develop: number, //0: FE, 1: BE, 2: DevOps
    years: number,
}

export interface Skill {
    id: number,
    title: string,
    path: string,
    checked?: boolean,
}

export interface DevStack {
    id: number,
    title: string,
    color: string,
}