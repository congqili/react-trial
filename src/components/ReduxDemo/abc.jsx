import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from "../../redux/actions/count"
import {nanoid} from 'nanoid'
import { Button} from 'antd';
 class ReduxDemo extends Component {
     // 增加
    increment=()=>{
        this.props.increment(3)
    }
    // 减
    decrement=()=>{
        this.props.decrement(3)
    }
    //添加信息
    setInfo=(e)=>{
        if(!e) return
        this.props.getUserDate({id:nanoid(),name:e,age:'24'})
    }
    //删除信息
    delInfo=(e)=>{
        this.props.delUserDate(e)
    }
    state={
        userInfo:[]
    }
    render() {
        return (
            <div>
               <div>{this.props.count}</div>
                <Button type="primary" onClick={this.increment}>增加</Button>
                <Button type="primary" onClick={this.decrement}>减少</Button>
            </div>
        )
    }
}
export default connect(
    state=>({
        count:state.count
    }),
    { increment,decrement})(ReduxDemo)