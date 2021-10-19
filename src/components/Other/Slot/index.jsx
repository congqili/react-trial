import React, { Component } from 'react'

export default class Slot extends Component {
    
    render() {
        return (
            <div>
                插槽-利用函数进行传递数据
                <Children render={(name)=><FirstChildren name={name}/>}></Children>
            </div>
        )
    }
}
class Children extends Component{
    state={
        name:'赫尔德'
    }
    render(){
        const {render}=this.props
        const {name}=this.state
        return(
            <div>Children
                {render(name)}
            </div>
        )
    }
} 
class FirstChildren extends Component{
  
    render(){
        const {name}=this.props
        return(
            <div>
                光明制造黑暗，黑暗滋生光明
                {name}
            </div>
        )
    }
}
