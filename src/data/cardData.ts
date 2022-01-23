
import { StackCardProps } from "../components/cards/StackCard";
import {nanoid} from "nanoid";

import slack from "../assets/logos/slack-logo.svg";
import typescript from "../assets/logos/typescript.svg";
import webpack from "../assets/logos/webpack.svg";
import naver from "../assets/logos/naver.png";
import go from "../assets/logos/go.svg";
import github from "../assets/logos/github.svg";
import gradle from "../assets/logos/gradle.svg";
import handleBar from "../assets/logos/handlebars.svg";
import linux from "../assets/logos/linux.svg";
import sequelize from "../assets/logos/sequelize.svg";
import aws from "../assets/logos/aws.svg";
import android from "../assets/logos/android.svg";
import angular from "../assets/logos/angularjs.svg";
import apache from "../assets/logos/apache.svg";
import gitLab from "../assets/logos/gitlab.svg";
import docker from "../assets/logos/docker.svg";
import dotnet from "../assets/logos/net.svg";
import nginx from "../assets/logos/nginx.svg";
import mysql from "../assets/logos/mysql.svg";
import react from "../assets/logos/react.svg";
import nodejs from "../assets/logos/node-js.svg";
import kakao from "../assets/logos/kakao.png";
import line from "../assets/logos/line.png";
import coupangeats from "../assets/logos/coupangeats.png";
import wowbrothers from "../assets/logos/wowbrothers.svg";
import marketkurly from "../assets/logos/marketkurly.png";
import kasa from "../assets/logos/kasa.jpeg";
import kakaobank from "../assets/logos/kakaobank.png";
import toss from "../assets/logos/toss.png";
import bucketplace from "../assets/logos/bucketplace.png";
import zigbang from "../assets/logos/zigbang.png";
import dabang from "../assets/logos/dabang.png";
import cjfoodvill from "../assets/logos/cjfoodvill.png";
import dunkin from "../assets/logos/dunkin.jpeg";
import kakaostyle from "../assets/logos/kakaostyle.png";
import ballan from "../assets/logos/ballan.png";
import brandi from "../assets/logos/brandi.png";
import suberbai from "../assets/logos/superbai.png";
import furiosa from "../assets/logos/furiosa.png";
import riiid from "../assets/logos/riiid.png";
import naverlabs from "../assets/logos/naverlabs.png";
import skelterlabs from "../assets/logos/skelterlabs.png";
import healingpaper from "../assets/logos/gangnam.png";
import hwahae from "../assets/logos/hwahae.png";
import musinsa from "../assets/logos/musinsa.png";
import samsung from "../assets/logos/samsung.png";
import lg from "../assets/logos/lg.png";
import freewheelin from "../assets/logos/freewheelin.png";
import jaranda from "../assets/logos/jaranda.png";
import lunit from "../assets/logos/lunit.png";
import deepbio from "../assets/logos/deepbio.png";
import hyperconnect from "../assets/logos/hyperconnect.png";





export const experienceMap = {
  junior: "신입~2년",
  mid: "2~6년",
  senior: "6년 이상"
}

const { junior, mid, senior } = experienceMap

export const mockSalaryData = {
  it: [
    {
      salary: "3.5k미만",
      experience: junior,
      value: 400,
    },
    {
      salary: "3.5k ~ 7k",
      experience: junior,
      value: 250,
    },
    {
      salary: "7k ~",
      experience: junior,
      value: 100,
    },
    // end of junior
    {
      salary: "3.5k미만",
      experience: mid,
      value: 250,
    },
    {
      salary: "3.5k ~ 7k",
      experience: mid,
      value: 500,
    },
    {
      salary: "7k ~",
      experience: mid,
      value: 250,
    },
    // end of mid 
    {
      salary: "3.5k미만",
      experience: senior,
      value: 50,
    },
    {
      salary: "3.5k ~ 7k",
      experience: senior,
      value: 400,
    },
    {
      salary: "7k ~",
      experience: senior,
      value: 550,
    },
  ]
}

export const stackData: Record<string, StackCardProps["stackLogos"][0]> = {
  slack: {
    imageSrc: slack,
    stackName: "slack",
    description: "슬랙(Slack)은 스튜어트 버터필드가 만든 클라우드 기반 팀 협업 도구이다.",
    nationalCount: 30,
  },
  typescript: {
    imageSrc: typescript,
    stackName: "typescript",
    description: "타입스크립트(TypeScript)는 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어이다. 타입스크립트에서 자신이 원하는 타입을 정의하고 프로그래밍을 하면 자바스크립트로 컴파일되어 실행할 수 있다.",
    nationalCount: 30,
  },
  webpack: {
    imageSrc: webpack,
    stackName: "webpack",
    description: "웹팩(Webpack 또는 webpack)은 오픈 소스 자바스크립트(JS) 모듈 번들러이다.주로 자바스크립트(JS)를 위한 모듈 번들러이지만 호환 플러그인을 포함하는 경우 HTML, CSS, 심지어는 이미지와 같은 프론트엔드 자산들을 변환할 수 있다.",
    nationalCount: 30,
  },
  github: {
    imageSrc: github,
    stackName: "github",
    description: "",
    nationalCount: 103,
  },
  go: {
    imageSrc: go,
    stackName: "go",
    description: "",
    nationalCount: 17,
  },
  gradle: {
    imageSrc: gradle,
    stackName: "gradle",
    description: "",
    nationalCount: 42,
  },
  handlebar: {
    imageSrc: handleBar,
    stackName: "handleBar",
    description: "",
    nationalCount: 3,
  },
  linux: {
    imageSrc: linux,
    stackName: "linux",
    description: "",
    nationalCount: 24,
  },
  sequelize: {
    imageSrc: sequelize,
    stackName: "sequelize",
    description: "",
    nationalCount: 11,
  },
  aws: {
    imageSrc: aws,
    stackName: "aws",
    description: "",
    nationalCount: 32,
  },
  android: {
    imageSrc: android,
    stackName: "android",
    description: "",
    nationalCount: 46,
  },
  angular: {
    imageSrc: angular,
    stackName: "angular",
    description: "",
    nationalCount: 25,
  },
  apache: {
    imageSrc: apache,
    stackName: "apache",
    description: "",
    nationalCount: 17,
  },
  docker: {
    imageSrc: docker,
    stackName: "docker",
    description: "",
    nationalCount: 52,
  },
  gitlab: {
    imageSrc: gitLab,
    stackName: "gitLab",
    description: "",
    nationalCount: 14,
  },
  dotnet: {
    imageSrc: dotnet,
    stackName: "dotnet",
    description: "",
    nationalCount: 11,
  },
  nginx: {
    imageSrc: nginx,
    stackName: "nginx",
    description: "",
    nationalCount: 46,
  },
  mysql: {
    imageSrc: mysql,
    stackName: "mysql",
    description: "",
    nationalCount: 51,
  },
  nodejs: {
    imageSrc: nodejs,
    stackName: "nodejs",
    description: "",
    nationalCount: 32,
  },
  react: {
    imageSrc: react,
    stackName: "react",
    description: "",
    nationalCount: 50,
  },
}


export const mockCategoryData = [
  {
  
}]


export const categoryMap = {
  it: "IT/통신",
  food: "푸드테크",
  financial: "금융/보험",
  service: "서비스업",
  fashion: "패션",
  ai: "인공지능",
  health: "헬스케어",
  manufacture: "제조",
  edu: "교육",
  medi: "의료",
  realestate: "부동산/인테리어",
}

const mockCardData: (StackCardProps & {
  category: string;
  id?: string;
})[]   = [
  {
    id: nanoid().slice(0,6),
    category: "it",
    companyName: "네이버",
    companyLink: "https://naver.com",
    imageSrc: naver,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "it",
    companyName: "카카오",
    companyLink: "https://www.kakaocorp.com/",
    imageSrc: kakao,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "it",
    companyName: "라인",
    companyLink: "https://line.me/ko/",
    imageSrc: line,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "it",
    companyName: "하이퍼커넥트",
    companyLink: "https://hyperconnect.com/",
    imageSrc: hyperconnect,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "food",
    companyName: "쿠팡이츠",
    companyLink: "https://www.coupangeats.com/",
    imageSrc: coupangeats,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "food",
    companyName: "우아한 형제들",
    companyLink: "https://www.woowahan.com/",
    imageSrc: wowbrothers,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "food",
    companyName: "마켓컬리",
    companyLink: "https://www.kurly.com/",
    imageSrc: marketkurly,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "financial",
    companyName: "카사",
    companyLink: "https://www.kasa.co.kr/",
    imageSrc: kasa,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "financial",
    companyName: "카카오뱅크",
    companyLink: "https://naver.com",
    imageSrc: kakaobank,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "financial",
    companyName: "비바리퍼블리카",
    companyLink: "https://naver.com",
    imageSrc: toss,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "realestate",
    companyName: "버킷플레이스",
    companyLink: "https://naver.com",
    imageSrc: bucketplace,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "realestate",
    companyName: "직방",
    companyLink: "https://naver.com",
    imageSrc: zigbang,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "realestate",
    companyName: "다방",
    companyLink: "https://naver.com",
    imageSrc: dabang,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "realestate",
    companyName: "다방",
    companyLink: "https://naver.com",
    imageSrc: dabang,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "service",
    companyName: "CJ푸드빌",
    companyLink: "https://naver.com",
    imageSrc: cjfoodvill,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "service",
    companyName: "던킨도너츠",
    companyLink: "https://naver.com",
    imageSrc: dunkin,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "fashion",
    companyName: "카카오스타일",
    companyLink: "https://naver.com",
    imageSrc: kakaostyle,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "fashion",
    companyName: "발란",
    companyLink: "https://naver.com",
    imageSrc: ballan,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "fashion",
    companyName: "브랜디",
    companyLink: "https://naver.com",
    imageSrc: brandi,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "슈퍼비에이아이",
    companyLink: "https://www.superb-ai.com",
    imageSrc: suberbai,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "퓨리오사",
    companyLink: "https://www.furiosa.ai/",
    imageSrc: furiosa,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "뤼이드",
    companyLink: "https://www.riiid.co",
    imageSrc: riiid,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "네이버랩스",
    companyLink: "https://www.naverlabs.com/",
    imageSrc: naverlabs,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "스켈터랩스",
    companyLink: "https://www.skelterlabs.com/",
    imageSrc: skelterlabs,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "health",
    companyName: "힐링페이퍼",
    companyLink: "https://www.healingpaper.com/",
    imageSrc: healingpaper,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "health",
    companyName: "화해",
    companyLink: "https://www.hwahae.co.kr/",
    imageSrc: hwahae,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "fashion",
    companyName: "무신사",
    companyLink: "https://www.musinsa.com/app/",
    imageSrc: musinsa,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "fashion",
    companyName: "무신사",
    companyLink: "https://www.musinsa.com/app/",
    imageSrc: musinsa,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "manufacture",
    companyName: "삼성전자",
    companyLink: "https://www.samsung.com/sec/",
    imageSrc: samsung,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "manufacture",
    companyName: "LG전자",
    companyLink: "https://www.lge.co.kr/",
    imageSrc: lg,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "edu",
    companyName: "프리윌린",
    companyLink: "https://www.mathflat.com/",
    imageSrc: freewheelin,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "edu",
    companyName: "자란다",
    companyLink: "https://jaranda.kr/",
    imageSrc: jaranda,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "medi",
    companyName: "루닛",
    companyLink: "lunit.io/ko",
    imageSrc: lunit,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "medi",
    companyName: "딥바이오",
    companyLink: "http://www.deepbio.co.kr/",
    imageSrc: deepbio,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
]

export default new class CardDataCache{
  card = new Map<string, typeof mockCardData[0]>();
  
  constructor(){
    for(let data of mockCardData) {
     this.card.set(data.id!, data);
    }
  }
}();

export {
  mockCardData,
};