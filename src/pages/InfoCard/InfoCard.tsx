import React from "react";

import Icon, { IconType } from "../../assets/Icon";
import CardBig from "../../components/CardBig";

import type { DataGithubItem } from "..";
import style from "./InfoCard.module.css";

type InfoCardProps = {
  item: DataGithubItem;
  key: string;
  handleFilpButton: (e: React.MouseEvent) => void;
};

function InfoCard({
  item: { id, name, github, star, tags },
  key,
  handleFilpButton,
}: InfoCardProps) {
  return (
    <CardBig>
      <div className={style.top}>
        <Icon type={id} />

        <div className={style.topRight}>
          <p className={style.desc}>
            <strong>{name}</strong>
            <a
              aria-label="GitHub repository"
              target="_blank"
              rel="noreferrer"
              href={github}
            >
              <Icon type={IconType.Github} />
            </a>
          </p>
          <p className={style.desc}>
            <span>
              최근 24시간 동안
              <b> +{star}개</b>
              <br />
              star를 받았습니다.
            </span>
          </p>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.tagList}>
          <ul>
            {tags.map((tag, childIdx) => (
              <li key={childIdx} className={style.label}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <button name={key} onClick={handleFilpButton}>
          <span>비슷한 프로젝트 보기</span>
        </button>
      </div>
    </CardBig>
  );
}

export default InfoCard;
