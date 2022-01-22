import { FC, HTMLAttributes } from "react";
import StackCard, { StackCardProps } from "../../components/cards/StackCard";

import "./stack.scss";

import slack from "../../assets/logos/slack-logo.svg";
import typescript from "../../assets/logos/typescript.svg";
import webpack from "../../assets/logos/webpack.svg";
import naver from "../../assets/logos/naver.png";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {

}

const Button: FC<ButtonProps> = ({children}) => {
  return <button className="button">{children}</button>
}

interface DividerProps {
  
};

const Divider: FC<DividerProps> = () => <div className="divider"/>

const StackPage: FC = () => {
  
  const handleClick = () => {
    console.log("click")
  }

  return(
    <div className="wrapper">
      <section className="page_section">
        <div className="button_container">
          {buttonData.map(({key, value}) => {
            return <Button key={key}>{value}</Button>
          })}
        </div>
        <Divider/>
        <article className="card_article">
          <div className="card_wrapper">
            {mockCardData.map((data, index) => {
              const { imageSrc, companyName, companyLink, stackLogos } = data;
              console.log({imageSrc})
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


const buttonData = [
  {
    key: "IT/통신",
    value: "IT/통신"
  },
  {
    key: "푸드테크",
    value: "푸드테크"
  },
  {
    key: "금융/보험",
    value: "금융/보험"
  },
  {
    key: "부동산/인테리어",
    value: "부동산/인테리어",
  },
  {
    key: "푸드테크",
    value: "푸드테크",
  },
  {
    key: "서비스업",
    value: "서비스업",
  },
  {
    key: "패션",
    value: "패션",
  },
  {
    key: "인공지능",
    value: "인공지능",
  },
  {
    key: "헬스케어",
    value: "헬스케어",
  },
  {
    key: "제조업",
    value: "제조업",
  },
  {
    key: "교육업",
    value: "교육업"
  },
  {
    key: "의료",
    value: "의료"
  },
]

const mockCardData: StackCardProps[] = [
  {
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