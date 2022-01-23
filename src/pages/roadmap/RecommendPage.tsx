import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Layout, Button } from 'antd';
import { observer } from 'mobx-react';
import store from './store/store';

const RecommendPage: React.FC = observer(() => {
    const { recommendList, setRecommendList } = store;

    useEffect(() => {
        setRecommendList();
    }, []);

    return (
        <Layout>
            <h1>나에게 맞는 추천 로드맵은 어느것 일까요?</h1>
            <div>
                {recommendList.map((item) => <div key={`id_${item.id}`}>{item.userName}</div>)}
            </div>
        </Layout>
    )
});

export default RecommendPage;