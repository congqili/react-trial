import React, { Component } from 'react'
import Header from './Header'
import List from "./List"
import Footer from './Footer'
import {nanoid} from 'nanoid'
export default class AddList extends Component {
    state={
        listAry:[{id:nanoid(),name:'哈哈',status:false}]
    }
    //添加list
    handHeader=(e)=>{
        let {listAry}=this.state
        let oneData={id:nanoid(),name:e,status:false}
        this.setState({
            listAry:[...listAry,oneData]
        })
    }
    //改变checked
    handChecked=(e)=>{
        let {listAry}=this.state
        let newListAry=listAry.map(item=>{
            if(item.id===e.id) {
                item.status=!item.status
                return item
            }else{
                return item
            }
        })
        this.setState({
            listAry:newListAry
        })
    }
    // 清空说有选中
    clearBox=(e)=>{ 
        let {listAry}=this.state
        let newListAry=listAry.map(item=>{
            if(e){
                item.status=true
            }else{
                item.status=false
            }
            return item
        })
        this.setState({
            listAry:newListAry
        })
    }
    render() {
        return (
            <div>
                <Header handHeader={this.handHeader}/>
                <List listAry={this.state.listAry} handChecked={this.handChecked}/>
                <Footer clearBox={this.clearBox} listAry={this.state.listAry}/>
            </div>
        )
    }
}
