
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
  junior: "??????~2???",
  mid: "2~6???",
  senior: "6??? ??????"
}

const { junior, mid, senior } = experienceMap

export const mockSalaryData = {
  it: [
    {
      salary: "3.5k??????",
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
      salary: "3.5k??????",
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
      salary: "3.5k??????",
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
    description: "??????(Slack)??? ???????????? ??????????????? ?????? ???????????? ?????? ??? ?????? ????????????.",
    nationalCount: 30,
  },
  typescript: {
    imageSrc: typescript,
    stackName: "typescript",
    description: "??????????????????(TypeScript)??? ????????????????????? ???????????? ???????????? ??????????????? ????????????. ???????????????????????? ????????? ????????? ????????? ???????????? ?????????????????? ?????? ????????????????????? ??????????????? ????????? ??? ??????.",
    nationalCount: 30,
  },
  webpack: {
    imageSrc: webpack,
    stackName: "webpack",
    description: "??????(Webpack ?????? webpack)??? ?????? ?????? ??????????????????(JS) ?????? ???????????????.?????? ??????????????????(JS)??? ?????? ?????? ?????????????????? ?????? ??????????????? ???????????? ?????? HTML, CSS, ???????????? ???????????? ?????? ??????????????? ???????????? ????????? ??? ??????.",
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
  it: "IT/??????",
  food: "????????????",
  financial: "??????/??????",
  service: "????????????",
  fashion: "??????",
  ai: "????????????",
  health: "????????????",
  manufacture: "??????",
  edu: "??????",
  medi: "??????",
  realestate: "?????????/????????????",
}

const mockCardData: (StackCardProps & {
  category: string;
  id?: string;
})[]   = [
  {
    id: nanoid().slice(0,6),
    category: "it",
    companyName: "?????????",
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
    companyName: "?????????",
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
    companyName: "??????",
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
    companyName: "??????????????????",
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
    companyName: "????????????",
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
    companyName: "????????? ?????????",
    companyLink: "https://www.woowahan.com/",
    imageSrc: wowbrothers,
    stackLogos: [
      stackData.typescript,
      stackData.github,
      stackData.aws,
      stackData.react,
      stackData.gradle,
      stackData.slac,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "food",
    companyName: "????????????",
    companyLink: "https://www.kurly.com/",
    imageSrc: marketkurly,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.gradle,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "financial",
    companyName: "??????",
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
    companyName: "???????????????",
    companyLink: "https://naver.com",
    imageSrc: kakaobank,
    stackLogos: [
      stackData.nginx,
      stackData.aws,
      stackData.go,
      stackData.react,
      stackData.typescript,
      stackData.docker,
      stackData.slack,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "financial",
    companyName: "?????????????????????",
    companyLink: "https://naver.com",
    imageSrc: toss,
    stackLogos: [
      stackData.react,
      stackData.aws,
      stackData.docker,
      stackData.nginx,
      stackData.github,
      stackData.typescript,
      stackData.slack,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "realestate",
    companyName: "??????????????????",
    companyLink: "https://naver.com",
    imageSrc: bucketplace,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
      stackData.github,
      stackData.slack,
      stackData.android,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "realestate",
    companyName: "??????",
    companyLink: "https://naver.com",
    imageSrc: zigbang,
    stackLogos: [
      stackData.android,
      stackData.github,
      stackData.slack,
      stackData.aws,
      stackData.react,
      stackData.typescript,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "realestate",
    companyName: "??????",
    companyLink: "https://naver.com",
    imageSrc: dabang,
    stackLogos: [
      stackData.aws,
      stackData.github,
      stackData.android,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "service",
    companyName: "CJ?????????",
    companyLink: "https://naver.com",
    imageSrc: cjfoodvill,
    stackLogos: [
      stackData.gradle,
      stackData.nginx,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "service",
    companyName: "???????????????",
    companyLink: "https://naver.com",
    imageSrc: dunkin,
    stackLogos: [
      stackData.aws,
      stackData.react,
      stackData.nginx,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "fashion",
    companyName: "??????????????????",
    companyLink: "https://naver.com",
    imageSrc: kakaostyle,
    stackLogos: [
      stackData.aws,
      stackData.react,
      stackData.typescript,
      stackData.nginx,
      stackData.github,
      stackData.go,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "fashion",
    companyName: "??????",
    companyLink: "https://naver.com",
    imageSrc: ballan,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.github,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "fashion",
    companyName: "?????????",
    companyLink: "https://naver.com",
    imageSrc: brandi,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.android,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "?????????????????????",
    companyLink: "https://www.superb-ai.com",
    imageSrc: suberbai,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.linux,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "????????????",
    companyLink: "https://www.furiosa.ai/",
    imageSrc: furiosa,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.go,
      stackData.linux,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "?????????",
    companyLink: "https://www.riiid.co",
    imageSrc: riiid,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.go,
      stackData.android,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "???????????????",
    companyLink: "https://www.naverlabs.com/",
    imageSrc: naverlabs,
    stackLogos: [
      stackData.go,
      stackData.typescript,
      stackData.react,
      stackData.nginx,
      stackData.sequelize,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "ai",
    companyName: "???????????????",
    companyLink: "https://www.skelterlabs.com/",
    imageSrc: skelterlabs,
    stackLogos: [
      stackData.linux,
      stackData.typescript,
      stackData.aws,
      stackData.sequelize,
      stackData.react,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "health",
    companyName: "???????????????",
    companyLink: "https://www.healingpaper.com/",
    imageSrc: healingpaper,
    stackLogos: [
      stackData.react,
      stackData.linux,
      stackData.typescript,
      stackData.aws,
      stackData.android,
      stackData.nginx,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "health",
    companyName: "??????",
    companyLink: "https://www.hwahae.co.kr/",
    imageSrc: hwahae,
    stackLogos: [
      stackData.slack,
      stackData.android,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.typescript,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "fashion",
    companyName: "?????????",
    companyLink: "https://www.musinsa.com/app/",
    imageSrc: musinsa,
    stackLogos: [
      stackData.slack,
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
    companyName: "?????????",
    companyLink: "https://www.musinsa.com/app/",
    imageSrc: musinsa,
    stackLogos: [
      stackData.typescript,
      stackData.react,
      stackData.nginx,
      stackData.slack,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "manufacture",
    companyName: "????????????",
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
    companyName: "LG??????",
    companyLink: "https://www.lge.co.kr/",
    imageSrc: lg,
    stackLogos: [
      stackData.github,
      stackData.nginx,
      stackData.docker,
      stackData.webpack,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "edu",
    companyName: "????????????",
    companyLink: "https://www.mathflat.com/",
    imageSrc: freewheelin,
    stackLogos: [
      stackData.github,
      stackData.gradle,
      stackData.aws,
      stackData.nginx,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "edu",
    companyName: "?????????",
    companyLink: "https://jaranda.kr/",
    imageSrc: jaranda,
    stackLogos: [
      stackData.gradle,
      stackData.nginx,
      stackData.typescript,
      stackData.docker,
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "medi",
    companyName: "??????",
    companyLink: "lunit.io/ko",
    imageSrc: lunit,
    stackLogos: [
      stackData.typescript,
      stackData.aws,
      stackData.react,
      stackData.nginx,
      stackData.docker,
      stackData.android,

    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "medi",
    companyName: "????????????",
    companyLink: "http://www.deepbio.co.kr/",
    imageSrc: deepbio,
    stackLogos: [
      stackData.android,
      stackData.typescript,
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