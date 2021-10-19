import React, { Component } from 'react'
import { Button } from 'antd'
export default class One extends Component {
    state={
        count:0
    }
    setObj=()=>{
        let {count}=this.state
        this.setState({
            count:++count
        },()=>{
            console.log('相当于vue的$nextick');
        })
    }
    setFun=()=>{
        this.setState(state=> ({count:++state.count}))
    }
    render() {
        return (
            <div>
                <div>   
                    <Button onClick={()=>{this.setObj()}}>set对象</Button>
                    <span>{this.state.count}</span>
                    <Button onClick={()=>{this.setFun()}}>set回调</Button>
                </div>
            </div>
        )
    }
}
