
import { StackCardProps } from "../components/cards/StackCard";
import {nanoid} from "nanoid";

import slack from "../assets/logos/slack-logo.svg";
import typescript from "../assets/logos/typescript.svg";
import webpack from "../assets/logos/webpack.svg";
import naver from "../assets/logos/naver.png";

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
      {
        imageSrc: typescript,
      },
      {
        imageSrc: webpack,
      }
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "it",
    companyName: "네이버",
    companyLink: "https://naver.com",
    imageSrc: naver,

    stackLogos: [
      {
        imageSrc: slack,
      },
      {
        imageSrc: typescript,
      },
      {
        imageSrc: webpack,
      }
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "health",
    companyName: "네이버",
    companyLink: "https://naver.com",
    imageSrc: naver,
    stackLogos: [
      {
        imageSrc: slack,
      },
      {
        imageSrc: typescript,
      },
      {
        imageSrc: webpack,
      }
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "financial",
    companyName: "네이버",
    companyLink: "https://naver.com",
    imageSrc: naver,
    stackLogos: [
      {
        imageSrc: slack,
      },
      {
        imageSrc: typescript,
      },
      {
        imageSrc: webpack,
      }
    ]
  },
  {
    id: nanoid().slice(0,6),
    category: "food",
    companyName: "네이버",
    companyLink: "https://naver.com",
    imageSrc: naver,
    stackLogos: [
      {
        imageSrc: slack,
      },
      {
        imageSrc: typescript,
      },
      {
        imageSrc: webpack,
      }
    ]
  }
]

export default new class CardDataCache{
  Instance = this;
  static card = new Map();
  
  constructor(){
    for(let data of mockCardData) {
     CardDataCache.card.set(data.id, data);
    }
  }
}();

export {
  mockCardData,
};