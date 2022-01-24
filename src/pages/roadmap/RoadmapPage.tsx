import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { FlowGraphDatum, RadialTreeGraph } from "@ant-design/graphs";
import "./RoadmapPage.css";
import store from "./store/store";
import { descriptionList, studyContents } from "./store/data";
import { Recommend, StudyContentItem, StudyItem } from "./store/types";
import { List, Divider, Typography } from "antd";

const RoadmapPage: React.FC = observer(() => {
  const { recommendList } = store;
  const { id } = useParams();
  const currentItem =
    recommendList.find((item) => item.id === Number(id)) ?? ({} as Recommend);

  const DemoRadialTreeGraph = () => {
    const data: FlowGraphDatum = currentItem?.nodes;
    const config = {
      edgeCfg: {
        type: "cubic",
      },
      nodeCfg: {
        type: "rect",
        size: [70, 40],
        padding: 110,
      },
      markerCfg: {
        show: true,
        collapsed: true,
      },
      behaviors: ["drag-canvas", "zoom-canvas", "drag-node"],
    };

    return <RadialTreeGraph {...config} data={data} />;
  };

  const studyContent: StudyContentItem = studyContents.filter(
    (item: any) => item.id === currentItem.develop
  )[0];

  return (
    <div id="roadMap" className="container page-wrapper">
      <div className="box mb-2">
        <h2 className="bold font-size-1-5">
          <span className="name">{currentItem?.userName}</span>님의{" "}
          {descriptionList[currentItem?.description || 0]} 로드맵
        </h2>
      </div>

      <div className="box mb-2">
        <DemoRadialTreeGraph />
      </div>

      <div className="box">
        <List
          header={<div>학습 콘텐츠</div>}
          bordered
          dataSource={studyContent.list}
          renderItem={(content: StudyItem) => {
            return (
              <List.Item>
                <Typography.Text mark>[{content.type}]</Typography.Text>{" "}
                <a target="_blank" rel="noreferrer" href={content.link}>
                  {content.description}
                </a>
              </List.Item>
            );
          }}
        />
      </div>
    </div>
  );
});

export default RoadmapPage;
