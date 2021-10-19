import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserDate,delUserDate} from "../../redux/actions/UserInfo"
import {nanoid} from 'nanoid'
import { Input } from 'antd';
import Abc from './abc'
const { Search } = Input;
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
        const useInfo=this.props.userInfo
        console.log(useInfo);
        return (
            <div>
               <div>{this.props.count}</div>
               <Abc/>
                <Search placeholder="input search text" onSearch={this.setInfo} style={{ width: 200 }} enterButton="添加" />
                
                <ul>{useInfo.length}
                    {
                        useInfo.map(item=>{
                            return (
                                <li key={item.id}>
                                    name:{item.name},age:{item.age}
                                    <div onClick={()=>{this.delInfo(item)}}>删除</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state=>({
        userInfo:state.userInfo
    }),
    { getUserDate,delUserDate})(ReduxDemo)