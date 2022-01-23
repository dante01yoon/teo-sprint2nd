import { useState, useEffect } from "react";
import cx from "classnames";

import Icon, { IconType } from "../../assets/Icon";
import Treemap from "../../components/Treemap";
import CardBig from "../../components/CardBig";

import DATA_GITHUB from "../../data/RankingGithubStar.json";
import DATA_FRAMEWORK from "../../data/RankingWebFramework.json";

import style from "./Statistics.module.css";

type DataGithubItem = {
  id: number;
  name: string;
  star: number;
  github: string;
  tags: string[];
};

enum Analysis {
  Interested = "interested",
  Satisfied = "satisfied",
  Awared = "awared",
  Used = "used",
}

enum Rank {
  Rank1 = "rank1",
  Rank2 = "rank2",
  Rank3 = "rank3",
  Rank4 = "rank4",
}

const LIME = [
  "#4F6D22",
  "#5E8424",
  "#6D9C26",
  "#7CB526",
  "#8FD327",
  "#ADDE63",
  "#BCE382",
  "#D3ECAC",
  "#E9F6D5",
  "#F8FCF3",
];

const YELLOW = [
  "#D66B00",
  "#E07E00",
  "#EB9300",
  "#F5AC00",
  "#FFC107",
  "#FFCA28",
  "#FFD54F",
  "#FFE082",
  "#FFECB3",
  "#FFF8E1",
];

const BLUE = [
  "#1A4B93",
  "#1959B8",
  "#1D6CE0",
  "#317EF2",
  "#5094FA",
  "#74AAFB",
  "#97BFFC",
  "#BAD5FD",
  "#DCEAFE",
  "#F0F6FF",
];

const VIOLET = [
  "#412499",
  "#4B25C1",
  "#5B2EE0",
  "#744CEB",
  "#9C7FF5",
  "#B29BF8",
  "#C8B8FA",
  "#E2D9FC",
  "#F4F1FE",
];

const COLOR_PALETTE = {
  [Analysis.Interested]: LIME,
  [Analysis.Satisfied]: YELLOW,
  [Analysis.Awared]: BLUE,
  [Analysis.Used]: VIOLET,
};

function Statistics() {
  const [activeAnalysis, setActiveAnalysis] = useState<Analysis>(Analysis.Used);
  const [color, setColor] = useState<string[]>(VIOLET);
  const [isCardFilpped, setIsCardFilpped] = useState<{
    [key in Rank]: boolean;
  }>({
    [Rank.Rank1]: false,
    [Rank.Rank2]: false,
    [Rank.Rank3]: false,
    [Rank.Rank4]: false,
  });

  const handleAnalysisButton = (e) => {
    const { name } = e.target;
    setActiveAnalysis(name as Analysis);
  };
  const handleFilpButton = (e) => {
    const { name } = e.target;

    setIsCardFilpped({
      ...isCardFilpped,
      [name]: !isCardFilpped[name],
    });
  };

  useEffect(() => {
    setColor(COLOR_PALETTE[activeAnalysis]);
  }, [activeAnalysis]);

  return (
    <div className={style.contents}>
      <section className={style.infomation}>
        <h3 className={style.sectionTitle}>
          🔥 최근 24시간 동안, Github Star가 급상승한 프로젝트
        </h3>

        <ul className={style.infoCards}>
          {Object.keys(DATA_GITHUB).map((key: string) => (
            <li key={key} className={style.infoCard}>
              <div
                className={cx(style.infoCardWrapper, {
                  [style.isFlipped]: isCardFilpped[key],
                })}
              >
                {DATA_GITHUB[key].map(
                  (
                    { name, id, github, star, tags }: DataGithubItem,
                    idx: number
                  ) => (
                    <div
                      key={name}
                      className={cx(style.infoCardItem, {
                        [style.back]: idx === 1,
                      })}
                    >
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
                    </div>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className={style.analysis}>
        <h3 className={style.sectionTitle}>✨ 이번 달 웹 프레임워크 순위</h3>
        <CardBig>
          <div className={style.cardHeader}>
            <strong className={style.cardTitle}>순위</strong>
            <ul className={style.cardButtons}>
              <li className={style.cardButton}>
                <button
                  name={Analysis.Interested}
                  className={cx({
                    [style.active]: activeAnalysis === Analysis.Interested,
                  })}
                  onClick={handleAnalysisButton}
                >
                  관심도
                </button>
              </li>
              <li className={style.cardButton}>
                <button
                  name={Analysis.Satisfied}
                  className={cx({
                    [style.active]: activeAnalysis === Analysis.Satisfied,
                  })}
                  onClick={handleAnalysisButton}
                >
                  만족도
                </button>
              </li>
              <li className={style.cardButton}>
                <button
                  name={Analysis.Awared}
                  className={cx({
                    [style.active]: activeAnalysis === Analysis.Awared,
                  })}
                  onClick={handleAnalysisButton}
                >
                  인지도
                </button>
              </li>
              <li className={style.cardButton}>
                <button
                  name={Analysis.Used}
                  className={cx({
                    [style.active]: activeAnalysis === Analysis.Used,
                  })}
                  onClick={handleAnalysisButton}
                >
                  사용률
                </button>
              </li>
            </ul>
          </div>
          <Treemap
            className={style.cardBody}
            data={DATA_FRAMEWORK[activeAnalysis]}
            colorField="name"
            color={color}
          />
        </CardBig>
      </section>
    </div>
  );
}

export default Statistics;
