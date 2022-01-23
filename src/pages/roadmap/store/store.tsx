import { makeAutoObservable } from "mobx";
import { Recommend } from "./types";
import { initRecommendList } from './data';

class Store {
    position: string = '';
    years: number = 0;
    recommendList: Array<Recommend> = [];

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

}

const RoadMapStore = new Store();
export default RoadMapStore;