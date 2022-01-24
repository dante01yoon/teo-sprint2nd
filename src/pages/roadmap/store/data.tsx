import { Recommend, Skill, DevStack, StudyContentItem } from "./types";
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
  {
    id: 7,
    userName: "세하도",
    favorite: 45,
    share: 39,
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
  {
    id: 8,
    userName: "그란데",
    favorite: 56,
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
    id: 9,
    userName: "바리스타",
    favorite: 73,
    share: 38,
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
    id: 10,
    userName: "버팔로",
    favorite: 51,
    share: 34,
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
    id: 11,
    userName: "루나",
    favorite: 59,
    share: 94,
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
    id: 12,
    userName: "싱글리",
    favorite: 95,
    share: 29,
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
    id: 13,
    userName: "로지",
    favorite: 52,
    share: 42,
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
    id: 14,
    userName: "솔아",
    favorite: 45,
    share: 39,
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
    id: 15,
    userName: "클레버",
    favorite: 62,
    share: 26,
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
  {
    id: 16,
    userName: "킷캣",
    favorite: 52,
    share: 74,
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
    id: 17,
    userName: "타니아",
    favorite: 69,
    share: 50,
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
    id: 18,
    userName: "미르",
    favorite: 50,
    share: 58,
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
    id: 19,
    userName: "블링크",
    favorite: 72,
    share: 61,
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
  {
    id: 20,
    userName: "마리",
    favorite: 59,
    share: 48,
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
    id: 21,
    userName: "미쉐린",
    favorite: 130,
    share: 39,
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
    id: 22,
    userName: "네티",
    favorite: 120,
    share: 23,
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
    id: 23,
    userName: "오로라",
    favorite: 124,
    share: 48,
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
  {
    id: 24,
    userName: "크리스",
    favorite: 36,
    share: 23,
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
    id: 25,
    userName: "브라이언",
    favorite: 82,
    share: 58,
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
    id: 26,
    userName: "재키",
    favorite: 39,
    share: 30,
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
    id: 27,
    userName: "도널드",
    favorite: 61,
    share: 21,
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

export const studyContents: Array<StudyContentItem> = [
  {
    id: 0,
    list: [
      {
        type: "글",
        link: "https://velog.io/@teo/Javascript%EC%97%90%EC%84%9C%EB%8F%84-SOLID-%EC%9B%90%EC%B9%99%EC%9D%B4-%ED%86%B5%ED%95%A0%EA%B9%8C",
        description: "Javascript에서도 SOLID 원칙이 통할까?",
      },
      {
        type: "영상",
        link: "https://www.youtube.com/watch?v=TTLHd3IyErM&t=13s",
        description: "2022 웹개발 로드맵 총정리 (공부순서 알려드림) | 올해는 정말 해보자 🚀",
      },
      {
        type: "영상",
        link: "https://www.youtube.com/watch?v=KF6t61yuPCY",
        description: "자바스크립트 기초 강좌 : 100분 완성",
      },
      {
        type: "글",
        link: "https://ko.javascript.info/",
        description: "모던 JavaScript 튜토리얼",
      },
      {
        type: "글",
        link: "http://tcpschool.com/html/html_expand_css",
        description: "HTML과 CSS - 코딩의 시작, TCP School",
      },
    ],
  },
  {
    id: 1,
    list: [
      {
        type: "글",
        link: "https://aws.amazon.com/ko/opensearch-service/the-elk-stack/what-is-elasticsearch/",
        description: "Elasticsearch란 무엇입니까? - Amazon Web Services",
      },
      {
        type: "영상",
        link: "https://www.youtube.com/watch?v=OqjJjpjDRLc",
        description: "What is a Relational Database?",
      },
      {
        type: "글",
        link: "http://pythonstudy.xyz/python/article/14-%EC%BB%AC%EB%A0%89%EC%85%98--Dictionary",
        description: "컬렉션: Dictionary - 예제로 배우는 파이썬 프로그래밍",
      },
      {
        type: "영상",
        link: "https://www.youtube.com/watch?v=89bFo003oik",
        description: "백엔드 공부 순서 | 백엔드 개발자가 되려면 뭘 공부해야 할까?",
      },
    ],
  },
  {
    id: 2,
    list: [
      {
        type: "글",
        link: "https://rinthel.github.io/rust-lang-book-ko/",
        description: "들어가기 앞서 - The Rust Programming Language",
      },
      {
        type: "글",
        link: "https://parksb.github.io/article/5.html",
        description: "공룡책으로 정리하는 운영체제 Ch.1",
      },
      {
        type: "영상",
        link: "https://www.youtube.com/watch?v=XXPBl20J22w",
        description: "Structures of Operating System",
      },
      {
        type: "영상",
        link: "https://www.youtube.com/watch?v=QAj3fsttKM4",
        description: "DevOps 는 무엇인가요? 현직 DevOps 엔지니어, AWS Hero 가 이야기하는 DevOps 이 정확한 의미.",
      },
    ],
  },
];
