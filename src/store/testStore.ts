import { message } from "antd";
import { action, makeObservable, observable } from "mobx";
// import { AViewModel } from "src/common";

export default class TestStore {
    @observable public data: any[]=[];
    @observable public count: number=0;
    constructor() {
        makeObservable(this);
    }
    @action.bound
    public onClickButton(){
        this.data.push("💩");
        message.error(this.data);
        this.count = this.data.length;
    }
    @action.bound
    public onClickClear(){
        this.data=[];
        message.error(this.data);
        this.count = this.data.length;
    }
}