import { makeAutoObservable } from "mobx";
import { Recommend, Skill } from "./types";
import { initRecommendList, skillList } from './data';

class Store {
    position: string = '';
    years: number = 0;
    devStack: number = 0;
    recommendList: Array<Recommend> = [];
    skillList: Array<Skill> = skillList;

    constructor(){
        makeAutoObservable(this)
    }
    
    setPosition = (value: string) => {
        this.position = value;
    }

    setYears = (value: number) => {
        this.years = value;
    }

    setRecommendList = () => {
        this.recommendList = initRecommendList;
    }

    setSkillList = (id: number) => {
        const index = this.skillList.findIndex((element) => element.id === id);

        this.skillList[index]["checked"] = !this.skillList[index]["checked"];
    }

    setDevStack = (id: number) => {
        this.devStack = id;
    }

}

const RoadMapStore = new Store();
export default RoadMapStore;