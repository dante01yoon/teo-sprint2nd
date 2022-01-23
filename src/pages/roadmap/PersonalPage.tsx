import React from 'react';
import { useNavigate } from "react-router-dom";
import { Layout, Input, Button } from 'antd';
import { observer } from 'mobx-react';
import store from './store/store';

const PersonalPage: React.FC = observer(() => {
    const { setPosition, setYears } = store;
    let nevigate = useNavigate();

    const handleOnClickBtn = () => {
        
        const postion = document.getElementById("postion") as HTMLInputElement;
        setPosition(postion.value);

        const years = document.getElementById("years") as HTMLInputElement;
        setYears(Number(years.value));

        nevigate("/recommend");

    }

    return (
        <Layout>
            <Layout.Content>
                <div>
                    <h2>지금 이시간에는...</h2>
                    <p>20개가 넘는 기업들이 다음 기술을 통해 세상을 변화시키고 있어요!</p>
                    <div>
                        skill...
                    </div>
                </div>

                <div>
                    <h2>관심 직무를 선택하고</h2>
                    <p>학습할 기술을 추천받아보세요.</p>
                    <Input placeholder="직무" id="postion"/>
                    <Input placeholder="n년" id="years"/>
                    <Button type="primary" onClick={handleOnClickBtn}>내 추천 기술 보러 가기</Button>
                </div>

                <div>
                    <h2>내가 알고 있는 기술</h2>
                    <div>
                        skill list...
                    </div>
                </div>
            </Layout.Content>
        </Layout>
    )
});

export default PersonalPage;