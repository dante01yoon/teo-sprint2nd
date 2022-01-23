import { Recommend, Skill, DevStack } from "./types";
import react from "../assets/logos/react.png";
import nodejs from "../assets/logos/node-js.png";
import angular from "../assets/logos/angular.png";
import slack from "../assets/logos/slack-logo.png";
import typescript from "../assets/logos/typescript.png";
import c from "../assets/logos/c.png";
import php from "../assets/logos/php.png";
import graphql from "../assets/logos/graphql.png";
import memcached from "../assets/logos/memcached.png";
import elasticsearch from "../assets/logos/elasticsearch.png";
import java from "../assets/logos/java.png";
import python from "../assets/logos/python.png";
import go from "../assets/logos/go.png";
import android from "../assets/logos/android.png";

export const descriptionList: Array<string> = [
    "기초부터 탄탄한",
    "숨겨왔던",
    "비밀스러운",
    "알고싶은",
    "완벽한",
];

export const initRecommendList: Array<Recommend> = [
  {
    id: 0,
    userName: "테오",
    favorite: 200,
    share: 60,
    nodes: [{}],
    description: 0,
    develop: 0, 
    years: 7,
  },
  {
    id: 1,
    userName: "설아아빠",
    favorite: 130,
    share: 45,
    nodes: [{}],
    description: 1,
    develop: 1, 
    years: 10,
  },
  {
    id: 2,
    userName: "알모",
    favorite: 120,
    share: 77,
    nodes: [{}],
    description: 2,
    develop: 0, 
    years: 3,
  },
  {
    id: 3,
    userName: "단테",
    favorite: 160,
    share: 58,
    nodes: [{}],
    description: 3,
    develop: 1, 
    years: 3,
  },
  {
    id: 4,
    userName: "홀리몰리",
    favorite: 160,
    share: 58,
    nodes: [{}],
    description: 4,
    develop: 2,
    years: 7,
  },
  {
    id: 5,
    userName: "이엘로",
    favorite: 178,
    share: 25,
    nodes: [{}],
    description: 1,
    develop: 1,
    years: 2,
  },
  {
    id: 6,
    userName: "데비니",
    favorite: 124,
    share: 29,
    nodes: [{}],
    description: 2,
    develop: 2,
    years: 5,
  },
];

export const skillList: Array<Skill> = [
  {
    id: 0,
    title: "react",
    path: react,
  },
  {
    id: 1,
    title: "angularJS",
    path: angular,
  },
  {
    id: 2,
    title: "node-js",
    path: nodejs,
  },
  {
    id: 3,
    title: "slack",
    path: slack,
  },
  {
    id: 4,
    title: "typescript",
    path: typescript,
  },
  {
    id: 5,
    title: "c++",
    path: c,
  },
  {
    id: 6,
    title: "php",
    path: php,
  },
  {
    id: 7,
    title: "graphql",
    path: graphql,
  },
  {
    id: 8,
    title: "memcached",
    path: memcached,
  },
  {
    id: 9,
    title: "elastic-search",
    path: elasticsearch,
  },
  {
    id: 10,
    title: "java",
    path: java,
  },
  {
    id: 11,
    title: "python",
    path: python,
  },
  {
    id: 12,
    title: "go",
    path: go,
  },
  {
    id: 13,
    title: "android",
    path: android,
  }

];

export const devStackList: Array<DevStack> = [
  {
    id: 0,
    title: "FRONTEND",
    color: "#f50",
  },
  {
    id: 1,
    title: "BACKEND",
    color: "#2db7f5",
  },
  {
    id: 2,
    title: "DEVOPS",
    color: "#87d068",
  },
]