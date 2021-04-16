import { Button, Select } from "antd";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import './test.css';
import TestStore from "src/store/testStore";
interface IProps {
    testStore?: TestStore;
}
@inject('testStore')
@observer
class TestView extends Component<IProps,{}> {
    constructor(props:IProps) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.onClickClear = this.onClickClear.bind(this);
    }
    public onClickButton(){
        this.props.testStore && this.props.testStore.onClickButton();
    }
    public onClickClear() {
        this.props.testStore && this.props.testStore.onClickClear();
    }
    public render(): React.ReactNode {
        return (
            <div className={'test'}>
                <div>
                    <Button onClick={this.onClickButton}>how do you do 😊</Button>
                    <Button onClick={this.onClickClear}>clear all</Button>
                </div>
                <div>
                    count:{this.props.testStore?.count}
                </div>
                <div>
                    <Select style={{width: '180px'}}
                            placeholder={'guess what'}
                    >
                        {
                            this.props.testStore && this.props.testStore.data.map((value, index)=>{
                                return <Select.Option value={value} key={index}>
                                    {value}
                                </Select.Option>
                            })
                        }
                    </Select>
                </div>
            </div>
        );
    }
}
export default TestView;