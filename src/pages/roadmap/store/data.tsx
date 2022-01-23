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
import { FlowGraphDatum } from "@ant-design/graphs";

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
    nodes: {
      nodes: [],
      edges: [],
      id: "FrontEnd",
      value: "FrontEnd",
      children: [
        {
          id: "cs",
          value: "cs",
          children: [],
        },
        {
          id: "html",
          value: "html",
          children: [],
        },
        {
          id: "css",
          value: "css",
          children: [
            {
              id: "css framework",
              value: "framework",
            },
          ],
        },
        {
          id: "JavaScript",
          value: "JavaScript",
          children: [
            {
              id: "javaScript framework",
              value: "framework",
            },
          ],
        },
      ],
    } as FlowGraphDatum,
    description: 0,
    develop: 0,
    years: 7,
  },
  {
    id: 1,
    userName: "설아아빠",
    favorite: 130,
    share: 45,
    nodes: {
      nodes: [],
      edges: [],
      id: "BackEnd",
      value: "BackEnd",
      children: [
        {
          id: "Java",
          value: "Java",
          children: [],
        },
        {
          id: "Relation DB",
          value: "Relation DB",
          children: [
            {
              id: "MySQL",
              value: "MySQL",
            },
          ],
        },
        {
          id: "Python",
          value: "Python",
          children: [],
        },
        {
          id: "NoSQL",
          value: "NoSQL",
          children: [
            {
              id: "MongoDB",
              value: "MongoDB",
            },
          ],
        },
      ],
    } as FlowGraphDatum,
    description: 1,
    develop: 1,
    years: 10,
  },
  {
    id: 2,
    userName: "알모",
    favorite: 120,
    share: 77,
    nodes: {
      nodes: [],
      edges: [],
      id: "FrontEnd",
      value: "FrontEnd",
      children: [
        {
          id: "cs",
          value: "cs",
          children: [],
        },
        {
          id: "html",
          value: "html",
          children: [],
        },
        {
          id: "Framwork",
          value: "Framwork",
          children: [
            {
              id: "Vue.js",
              value: "Vue.js",
            },
            {
              id: "Angular.js",
              value: "Angular.js",
            },
          ],
        },
        {
          id: "css",
          value: "css",
          children: [
            {
              id: "Reactstra",
              value: "Reactstra",
            },
            {
              id: "Marterial UI",
              value: "Marterial UI",
            },
            {
              id: "Tailwind CSS",
              value: "Tailwind CSS",
            },
          ],
        },
      ],
    } as FlowGraphDatum,
    description: 2,
    develop: 0,
    years: 3,
  },
  {
    id: 3,
    userName: "단테",
    favorite: 160,
    share: 58,
    nodes: {
      nodes: [],
      edges: [],
      id: "BackEnd",
      value: "BackEnd",
      children: [
        {
          id: "API",
          value: "API",
          children: [
            {
              id: "REST",
              value: "REST",
            },
            {
              id: "JSON APIs",
              value: "SON APIs",
            },
          ],
        },
        {
          id: "cs",
          value: "cs",
          children: [],
        },
        {
          id: "security",
          value: "Security",
          children: [
            {
              id: "HTTPS",
              value: "HTTPS",
            },
            {
              id: "CORS",
              value: "CORS",
            },
          ],
        },
        {
          id: "Search Engine",
          value: "Search Engine",
          children: [
            {
              id: "Elasticsearch",
              value: "Elasticsearch",
            },
          ],
        },
      ],
    } as FlowGraphDatum,
    description: 3,
    develop: 1,
    years: 3,
  },
  {
    id: 4,
    userName: "홀리몰리",
    favorite: 160,
    share: 58,
    nodes: {
      nodes: [],
      edges: [],
      id: "DevOps",
      value: "DevOps",
      children: [
        {
          id: "cs",
          value: "cs",
          children: [],
        },
        {
          id: "Operating System",
          value: "Operating System",
          children: [
            {
                id: "SUSE Linux",
                value: "SUSE Linux",
            },
            {
                id: "Debian",
                value: "Debian",
            },
          ],
        },
        {
          id: "Networking",
          value: "Networking",
          children: [
            {
              id: "Emails",
              value: "Emails",
            },
            {
              id: "SMTP",
              value: "SMTP",
            },
          ],
        },
        {
          id: "Web Server",
          value: "Web Server",
          children: [
            {
              id: "IIS",
              value: "IIS",
            },
            {
              id: "Nginx",
              value: "Nginx",
            },
          ],
        },
      ],
    } as FlowGraphDatum,
    description: 4,
    develop: 2,
    years: 7,
  },
  {
    id: 5,
    userName: "이엘로",
    favorite: 178,
    share: 25,
    nodes: {
      nodes: [],
      edges: [],
      id: "BackEnd",
      value: "BackEnd",
      children: [
        {
          id: "Caching",
          value: "Caching",
          children: [
            {
                id: "CDN",
                value: "CDN",
              },
              {
                  id: "Server Side",
                  value: "Server Side",
                },
          ],
        },
        {
          id: "Testing",
          value: "Testing",
          children: [
            {
                id: "Integration",
                value: "Integration",
              },
              {
                  id: "Unit",
                  value: "Unit",
                },
        ],
        },
        {
          id: "Search Engines",
          value: "Search Engines",
          children: [
            {
              id: "Elasticsearch",
              value: "Elasticsearch",
            },
          ],
        },
      ],
    } as FlowGraphDatum,
    description: 1,
    develop: 1,
    years: 2,
  },
  {
    id: 6,
    userName: "데비니",
    favorite: 124,
    share: 29,
    nodes: {
      nodes: [],
      edges: [],
      id: "DevOps",
      value: "DevOps",
      children: [
        {
          id: "Language",
          value: "Language",
          children: [
            {
                id: "Go",
                value: "Go",
              },
              {
                  id: "Rust",
                  value: "Rust",
                },
          ],
        },
        {
          id: "OS Concepts",
          value: "OS Concepts",
          children: [],
        },
        {
          id: "Operating System",
          value: "Operating System",
          children: [
            {
              id: "Linux",
              value: "Linux",
            },
            {
              id: "Unix",
              value: "Unix",
            },
          ],
        },
        {
          id: "Testing",
          value: "Testing",
          children: [
            {
              id: "Functional Testing",
              value: "Functional Testing",
            },
          ],
        },
      ],
    } as FlowGraphDatum,
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
  },
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
];
