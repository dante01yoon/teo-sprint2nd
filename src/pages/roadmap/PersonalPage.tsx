import React from "react";
import {useNavigate} from "react-router-dom";
import {Input, Button, Select} from "antd";
import {observer} from "mobx-react";
import Checkbox from "antd/lib/checkbox/Checkbox";
import store from "./store/store";
import "./PersonalPage.css";
import {skillList as orgSkillList, devStackList} from "./store/data";
import {Skill} from "./store/types";

const PersonalPage: React.FC = observer(() => {
    const {
        setYears,
        skillList,
        devStack,
        setSkillList,
        setDevStack,
    } = store;
    const navigate = useNavigate();

    const handleOnClickBtn = () => {
        const years = document.getElementById("years") as HTMLInputElement;

        if (years.value === (null || undefined || "")) {
            alert("연차를 입력하세요!")
        } else {
            setYears(Number(years.value));

            navigate("/recommend");
        }
    };

    const skillItemClicked = (id: number) => setSkillList(id);
    const devStackClicked = (id: number) => setDevStack(id);

    return (
        <div id="personal" className="container page-wrapper">
            <div className="mb-2">
                <div className="box">
                    <h2 className="title bold font-size-1-5">지금 이시간에는...</h2>
                    <p className="description bold font-size-1-1">
                        20개가 넘는 기업들이 다음 기술을 통해 세상을 변화시키고 있어요!
                    </p>
                    <div className="language-list">
                        <ul>
                            {orgSkillList.map((item: Skill) => (
                                <li key={`language-list_${item.id}`}>
                                    <a href="/" title="">
                                        <div>
                                            <img src={item.path} alt={item.title}/>
                                        </div>
                                        <span className="title bold">{item.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex ">
                <div className="box flex-grow-1">
                    <h2 className="bold font-size-1-5">관심 직무를 선택하고</h2>
                    <p className="description mb-30 bold font-size-1-1">학습할 기술을 추천받아보세요.</p>

                    <div className="flex">
                        <p className="mr-3-txt bold font-size-1-1">직무 : </p>
                        <Select
                            id="position"
                            className="block h-35"
                            defaultValue={devStack}
                            onChange={devStackClicked}
                        >
                            {devStackList.map((item) => (
                                <Select.Option key={item.id} value={item.id}>
                                    {item.title}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>

                    <div className="flex">
                        <p className="mr-3-txt font-size-1-1 bold">연차 : </p>
                        <Input placeholder="n년" id="years" className="mb-2 h-35" type="number"/>
                    </div>
                    <Button
                        type="primary"
                        onClick={handleOnClickBtn}
                        className="ant-btn-block"
                    >
                        내 추천 기술 보러 가기
                    </Button>
                </div>

                <div className="box flex-grow-1">
                    <h2 className="bold font-size-1-5">내가 알고 있는 기술</h2>
                    <div className="skills">
                        {skillList.map((item: Skill) => (
                            <div
                                className="skill-item"
                                key={item.id}
                                onClick={skillItemClicked.bind(this, item.id)}
                            >
                                <Checkbox checked={item.checked}/>
                                <div className="img">
                                    <img src={item.path} alt={item.title}/>
                                </div>
                                <span className="title">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default PersonalPage;
