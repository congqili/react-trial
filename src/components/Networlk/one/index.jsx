import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import Two from '../two'
import Three from '../three'
class OneNetwork extends Component {
    handJump=()=>{
        this.props.history.push('/router-two/one',{name:'李响',age:'24',type:'push'})
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.handJump()}}>编程式导航</button>
                <Two/>
                <Three/>
            </div>
        )
    }
}
export default withRouter(OneNetwork)
