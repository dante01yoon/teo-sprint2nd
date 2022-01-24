import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Tag} from "antd";
import {observer} from "mobx-react";
import store from "./store/store";
import "./RecommendPage.css";
import {devStackList, descriptionList} from "./store/data";
import {DevStack} from "./store/types";
import {HeartTwoTone, LinkOutlined} from "@ant-design/icons";

const RecommendPage: React.FC = observer(() => {
    const {recommendList, devStack, setRecommendList} = store;
    const navigate = useNavigate();

    useEffect(() => {
        setRecommendList();
    }, []);

    const tag: DevStack | undefined = devStackList.find(
        (item) => item.id === devStack
    );

    const roadMapViewButtonClicked = (id: number) => {
        navigate(`/roadmap/${id}`);
    };

    const shareBtnClicked = () => {
        alert("공유하기 - 서비스 준비중입니다.🙏");
    };
    const likeBtnClicked = () => {
        alert("좋아요 - 서비스 준비중입니다.🙏");
    };

    return (
        <div id="recommend" className="container page-wrapper">
            <div className="box mb-2">
                <h2 className="bold font-size-1-5">나에게 맞는 추천 로드맵은 어느것 일까요?</h2>
                <Tag className="tag" color={tag?.color}>
                    {tag?.title}
                </Tag>
            </div>
            <div className="flex">
                {recommendList.map((item) => (
                    <div className="recommend-item" key={item.id}>
                        <div className="header">
                            <span className="name">{item.userName}</span>님의
                            <br/>
                            <span className="title">
                {descriptionList[item.description]} 로드맵
              </span>
                        </div>

                        <div className="meta">
                            <Button className="likeCnt" onClick={likeBtnClicked}>
                                <HeartTwoTone twoToneColor="#eb2f96"/>
                                {item.favorite}
                            </Button>
                            <Button className="shareCnt" onClick={shareBtnClicked}>
                                <LinkOutlined/>
                                {item.share}
                            </Button>
                        </div>

                        <Button type="primary" onClick={roadMapViewButtonClicked.bind(this, item.id)}>
                            보러 가기
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default RecommendPage;
