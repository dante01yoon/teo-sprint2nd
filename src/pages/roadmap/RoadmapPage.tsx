
import React from "react";
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { FlowGraphDatum, RadialTreeGraph } from "@ant-design/graphs";
import "./RoadmapPage.css";
import store from './store/store';
import { descriptionList } from "./store/data";

const RoadmapPage: React.FC = observer(() => {
    const { recommendList } = store;
  const DemoRadialTreeGraph = () => {
    const data = {
      nodes: [],
      edges: [],
      id: "FrontEnd",
      value: "FrontEnd",
      children: [
        {
          id: "cs",
          value: "cs",
          children: [],
        },
        {
          id: "html",
          value: "html",
          children: [],
        },
        {
          id: "css",
          value: "css",
          children: [
            {
              id: "css framework",
              value: "framework",
            },
          ],
        },
        {
          id: "JavaScript",
          value: "JavaScript",
          children: [
            {
              id: "javaScript framework",
              value: "framework",
            },
          ],
        },
      ],
    } as FlowGraphDatum;

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

  const { id } = useParams();

  const currentItem = recommendList.find(item => item.id === Number(id))
  
  return (
    <div id="roadMap">
      <h2>{currentItem?.userName}님의 {descriptionList[currentItem?.description || 0]} 로드맵</h2>
      <DemoRadialTreeGraph />
    </div>
  );
})

export default RoadmapPage;
