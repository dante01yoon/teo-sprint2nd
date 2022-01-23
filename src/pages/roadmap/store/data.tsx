import { Recommend, Skill, DevStack } from "./types";

export const initRecommendList: Array<Recommend> = [
  {
    id: 0,
    userName: "테오",
    favorite: 200,
    share: 60,
    nodes: [{}],
    description: {},
    develop: 0, 
    years: 7,
  },
  {
    id: 1,
    userName: "설아아빠",
    favorite: 130,
    share: 45,
    nodes: [{}],
    description: {},
    develop: 1, 
    years: 10,
  },
  {
    id: 2,
    userName: "알모",
    favorite: 120,
    share: 77,
    nodes: [{}],
    description: {},
    develop: 0, 
    years: 3,
  },
  {
    id: 3,
    userName: "단테",
    favorite: 160,
    share: 58,
    nodes: [{}],
    description: {},
    develop: 1, 
    years: 3,
  },
  {
    id: 4,
    userName: "홀리몰리",
    favorite: 160,
    share: 58,
    nodes: [{}],
    description: {},
    develop: 2,
    years: 7,
  },
  {
    id: 5,
    userName: "이엘로",
    favorite: 178,
    share: 25,
    nodes: [{}],
    description: {},
    develop: 1,
    years: 2,
  },
  {
    id: 6,
    userName: "데비니",
    favorite: 124,
    share: 29,
    nodes: [{}],
    description: {},
    develop: 2,
    years: 5,
  },
];

export const skillList: Array<Skill> = [
  {
    id: 0,
    title: "react",
    path: "react.png",
  },
  {
    id: 1,
    title: "angularJS",
    path: "angular.png",
  },
  {
    id: 2,
    title: "node-js",
    path: "node-js.png",
  }
];

export const devStackList: Array<DevStack> = [
  {
    id: 0,
    title: "FRONTEND",
  },
  {
    id: 1,
    title: "BACKEND",
  },
  {
    id: 2,
    title: "DEVOPS",
  },
]