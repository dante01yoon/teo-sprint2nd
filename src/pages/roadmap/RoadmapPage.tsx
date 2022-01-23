import React from "react";
import {useParams} from 'react-router-dom';
import {observer} from 'mobx-react';
import {FlowGraphDatum, RadialTreeGraph} from "@ant-design/graphs";
import "./RoadmapPage.css";
import store from './store/store';
import {descriptionList} from "./store/data";
import { Recommend } from "./store/types";

const RoadmapPage: React.FC = observer(() => {
    const {recommendList} = store;
    const { id } = useParams();
    const currentItem = recommendList.find(item => item.id === Number(id)) ?? {} as Recommend;
  
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

        return <RadialTreeGraph {...config} data={data}/>;
    };

    return (
        <div id="roadMap" className="container page-wrapper">
            <div className="box mb-2">
                <h2>{currentItem?.userName}님의 {descriptionList[currentItem?.description || 0]} 로드맵</h2>
            </div>

            <DemoRadialTreeGraph/>
        </div>
    );
})

export default RoadmapPage;
