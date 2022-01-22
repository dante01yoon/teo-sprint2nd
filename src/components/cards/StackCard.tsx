import { FC, HTMLAttributes } from "react";
import "./stackCard.scss";

export interface StackCardProps extends HTMLAttributes<HTMLDivElement>{
  imageSrc: string;
  companyName: string;
  companyLink: string;
  stackLogos: {imageSrc: string}[]
}

const StackCard: FC<StackCardProps> = ({
  imageSrc,
  companyLink,
  companyName,
  stackLogos,
  ...props
}) => {
// style={{backgroundImage: `url(${imageSrc})`}}
  return (
    <div className="card_container" {...props}>
      <div className="card_image_box">
        <img className="card_image"  src={imageSrc}/>
      </div>
      <div className="card_name_container">
        <div className="card_company_name">{companyName}</div> 
        <a className="card_company_link" href={companyLink} target="_blank" rel="noopener noreferrer">{companyLink}</a>
      </div>
      <div className="card_stack_container">
        {
          stackLogos.map(({imageSrc},index) => {
            return (<div 
              className="card_stack" 
              style={{
                backgroundImage: `url(${imageSrc})`,
              }}
              key={`$${index}:imageSrc`}
            />
          )})
        }
      </div>
    </div>
  )
}

export default StackCard;