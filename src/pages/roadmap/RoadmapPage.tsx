import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import store from "./store/store";
import { Recommend } from './store/types';
import { descriptionList } from './store/data';

const RoadmapPage: React.FC = observer(() => {
    const {id} = useParams();
    const {
        recommendList,
    } = store;

    const recommendItem: Recommend | undefined = recommendList.find(item => item.id === Number(id));

    return <div>RoadmapPage <p>{recommendItem?.userName}님의 {descriptionList[recommendItem?.description ?? 0]} 로드맵</p></div>
});

export default RoadmapPage;