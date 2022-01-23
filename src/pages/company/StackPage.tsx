import { FC, HTMLAttributes, useMemo, useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import StackCard from "../../components/cards/StackCard";
import { mockCardData } from "../../data/cardData";

import "./stack.scss";


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
  const {id} = useParams();
  const navigate = useNavigate();

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
    <>
    {id ?
      <Outlet/>
      :
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
                const { imageSrc, companyName, companyLink, stackLogos, id } = data;
                const handleMoveTo = () => {
                  navigate(`/company/${id}`)
                }
                
                return (
                  <StackCard
                    key={`${companyName}$::${index}`}
                    imageSrc={imageSrc ?? ""}
                    companyLink={companyLink}
                    companyName={companyName}
                    stackLogos={stackLogos}
                    onClick={handleMoveTo}
                  />
                )
              })}
            </div>
          </article>
        </section>
      </div>
      }
    </>
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
