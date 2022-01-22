import { FC, HTMLAttributes, useCallback, useEffect, useMemo, useState } from "react";
import StackCard, { StackCardProps } from "../../components/cards/StackCard";

import "./stack.scss";

import slack from "../../assets/logos/slack-logo.svg";
import typescript from "../../assets/logos/typescript.svg";
import webpack from "../../assets/logos/webpack.svg";
import naver from "../../assets/logos/naver.png";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isPressed?: boolean;
}

const Button: FC<ButtonProps> = ({children, onClick, isPressed}) => {

  return <button className={`button ${isPressed ? "button_pressed" : ""}`} onClick={onClick}>{children}</button>
}

interface DividerProps {
  
};

const Divider: FC<DividerProps> = () => <div className="divider"/>

const StackPage: FC = () => {
  const [category, setCategory] = useState(
    "all",
  );
  
  const handleClick = (category: string, reset?: boolean) => {
    return () => setCategory(reset ? "all" : category)
  }

  const getFilteredCardsList = useMemo(() => {
    if(category === "all"){
      return mockCardData;
    }
    return mockCardData.filter(({category: eachCategory}) => {
      return eachCategory === category;
    })
  },[category])
  
  return(
    <div className="wrapper">
      <section className="page_section">
        <div className="button_container">
          {buttonData.map(({key, value}, index) => {
            const needReset = category === key;
            return <Button key={`${key}::${index}`} onClick={handleClick(key, needReset)} isPressed={needReset}>{value}</Button>
          })}
        </div>
        <Divider/>
        <article className="card_article">
          <div className="card_wrapper">
            {getFilteredCardsList.map((data, index) => {
              const { imageSrc, companyName, companyLink, stackLogos } = data;

              return (
                <StackCard
                  key={`${companyName}$::${index}`}
                  imageSrc={imageSrc ?? ""}
                  companyLink={companyLink}
                  companyName={companyName}
                  stackLogos={stackLogos}
                />
              )
            })}
          </div>
        </article>
      </section>
    </div>
  )
}


export default StackPage;

const categoryMap = {
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

const { it, food, financial, realestate, service, fashion, ai, health, manufacture, edu, medi} = categoryMap;

const buttonData = [
  {
    key: "it",
    value: it
  },
  {
    key: "food",
    value: food,
  },
  {
    key: "financial",
    value: financial
  },
  {
    key: "realestate",
    value: realestate,
  },
  {
    key: "service",
    value: service,
  },
  {
    key: "fashion",
    value: fashion,
  },
  {
    key: "ai",
    value: ai,
  },
  {
    key: "health",
    value: health,
  },
  {
    key: "manufacture",
    value: manufacture,
  },
  {
    key: "edu",
    value: edu
  },
  {
    key: "medi",
    value: medi
  },
]

const mockCardData: (StackCardProps & {
  category: string;
})[]   = [
  {
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