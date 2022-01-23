import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Tag } from "antd";
import { observer } from "mobx-react";
import store from "./store/store";
import "./RecommendPage.css";
import { devStackList, descriptionList } from './store/data';
import { DevStack } from "./store/types";

const RecommendPage: React.FC = observer(() => {
  const { recommendList, devStack, setRecommendList } = store;
  const navigate = useNavigate();

  useEffect(() => {
    setRecommendList();
  }, []);

  const tag: DevStack | undefined = devStackList.find(item => item.id === devStack);

  const detailViewClicked = (id: number) => {
	navigate(`/roadmap/${id}`);
  }

  return (
    <div className="container">
      <Tag className="tag" color={tag?.color}>{tag?.title}</Tag>
      <h1>나에게 맞는 추천 로드맵은 어느것 일까요?</h1>
      <div>
        {recommendList.map((item) => (
          <div className="card" key={item.id}>
			  <p><span className="user-name">{item.userName}</span> 님의 {descriptionList[item.description]} 로드맵</p>
			  <div className="count-box"> 
				  <p className="count">{item.favorite}</p>
				  <p className="count">{item.share}</p>
			  </div>
			  <Button onClick={detailViewClicked.bind(this, item.id)}>보러 가기</Button>
		  </div>
        ))}
      </div>
    </div>
  );
});

export default RecommendPage;
