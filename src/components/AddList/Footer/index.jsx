import React, { Component } from 'react'

export default class Footer extends Component {
    //取消/选中  全部
    handChecked=(e)=>{
        let flag=e.target.checked
        this.props.clearBox(flag?1:0)
    }
    render() {
        let {listAry}=this.props
        let nowNum=0
        listAry.forEach(item=>{
            if(item.status) ++nowNum
        })
        return (
            <div>
                <label >共多少条{listAry.length}/{nowNum}
                <input type="checkbox" checked={nowNum===listAry.length} onChange={(e)=>{this.handChecked(e)}}/>
                </label>
            </div>

        )
    }
}
