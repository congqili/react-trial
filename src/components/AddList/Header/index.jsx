import React, { Component } from 'react'

export default class Header extends Component {
    //根据输入值添加多选
    handUp=(e)=>{
        const {keyCode,target}=e
        if(keyCode!==13 || !target.value.trim()) return
        this.props.handHeader(target.value)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入" onKeyUp={this.handUp}/>
            </div>
        )
    }
}
