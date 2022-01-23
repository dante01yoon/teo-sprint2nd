import { FC, HTMLAttributes, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { StackCardProps } from "../../components/cards/StackCard";
import MockCache, { categoryMap, mockSalaryData } from "../../data/cardData";
import "./companyId.scss";
import { Bar, Column } from "@ant-design/plots"
interface CompanyStackCardProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  stackName: string;
  isSelected: boolean;
}

const CompanyStackCard: FC<CompanyStackCardProps> = ({imageSrc, stackName, isSelected, ...props}) => {
  return (
    <div className={`stack_card_container ${isSelected ? "stack_card_selected_card" : ""}`} {...props}>
      <img src={imageSrc} className="stack_card_image"/>
      <div className="stack_card_name">{stackName}</div>
    </div>
  )
}

type StackObject = StackCardProps["stackLogos"][0];

const CompanyIdPage: FC = () => {
  const {id} = useParams();
  const data = MockCache.card.get(id || "");
  const [selectedStack, setSelectedStack] = useState<StackObject | undefined>(data?.stackLogos[0]);
  
  if(!data) {
    return <Navigate replace to="/company"/>
  }

  const {imageSrc, companyName, stackLogos} = data;

  const handleClickCard = (stackObject: StackObject) => () => {
    setSelectedStack(stackObject);
  }

  return (
    <section className="company_section">
      <article className="company_header">
        <img src={imageSrc} className="company_header_image" alt={companyName}/>
        <h2 className="company_header_name">{companyName}</h2>
      </article>
      <div className="company_divider" />
      <section className="company_content_section">
        <article className="company_stack_article">
          {stackLogos.filter(object => Boolean(object)).map((stackObject,index) => {
            const {stackName, imageSrc} = stackObject
            return (
              <CompanyStackCard 
                isSelected={stackName === selectedStack?.stackName}
                stackName={stackName} 
                key={`$::${index}${stackName}`}
                imageSrc={imageSrc}
                onClick={handleClickCard(stackObject)}
              />
            )
          })}
        </article>
        <article className="company_chart_article">
          { selectedStack &&
          <div className="company_stack_information_wrapper">
            <div className="company_stack_information_main">
              <img src={selectedStack.imageSrc} className="company_stack_information_image"/>
              <div className="company_stack_information_container">
                <div className="company_stack_information_name">{selectedStack.stackName}</div>
                <div className="company_stack_information_national_count_box">
                  <div className="company_stack_information_national_count">국내 사용 기업 수</div>
                  <div className="company_stack_information_national_count">{selectedStack.nationalCount}</div>
                </div>
              </div>
            </div>
            <div className="company_stack_information_description">{selectedStack.description}</div>
          </div>}
          
          <div className="company_stack_salary_wrapper">
            {data.category !== "all" &&
              <div className="company_stack_national">
                <h3><span style={{color: colorMap[~~(Math.random()*colorMap.length)]}}>{categoryMap[data.category as keyof typeof categoryMap]}</span> 업계의 연차별 연봉 통계</h3>
                <div className="company_stack_bar">
                  <Bar {...barConfigRow} />
                </div>
                <div className="company_stack_column">
                  <Column {...barConfigColumn} />
                </div>
              </div>
            }
          </div>
        </article>
      </section>
    </section>
  )
};

const colorMap = ["#58a326", "#7b26a3", "#ba6f29", "#7ecc25", "#a19712"]


const barConfigRow = {
  data: mockSalaryData.it,
  xField: "value",
  yField: "experience",
  seriesField: "salary",
  isPercent: true,
  isStack: true,
  label: {
    content: (item: any) => {
      return (item.value * 100).toFixed(2);
    },
    style: {
      fill: "#fff",
    }
  }
}

const barConfigColumn = {
  ...barConfigRow,
  xField: "experience",
  yField: "value"
}

export default CompanyIdPage;