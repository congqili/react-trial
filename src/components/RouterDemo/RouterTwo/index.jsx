import React, { Component } from 'react'
import { NavLink,Route,Redirect,Switch } from 'react-router-dom'
import One from './One'
import Two from './Two'
import {Button } from 'antd'
export default class RouterTwo extends Component {
    //只有路由页面this才有跳转的api
    handJump=()=>{
        this.props.history.push('/router/router-two/one',{name:'李响',age:'24',type:'push'})
    }
    render() {
        return (
            <div>
                RouterTwo<br/>
                <Button  type="primary" size='small' onClick={()=>{this.handJump()}}>编程式导航</Button>
                <div>
                    {/* 👆👆👆👆编程式导航 */}
                    <NavLink activeClassName='light-act' to="/router/router-two/one">one</NavLink>
                    {/* <NavLink activeClassName='light-act' 
                        to={`/router-two/two?name=${'李响'}&&age=${24}&&type=${'search'}`}
                    >two-search </NavLink> */}
                    {/* <NavLink activeClassName='light-act' 
                        to={`/router-two/two/李响/24/params`}
                    >two-params</NavLink> */}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <NavLink activeClassName='light-act' 
                        to={{pathname:"/router/router-two/two", state:{name:'李响',age:24,type:'state'}}}
                    >two-state</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/router/router-two/one" component={One}></Route>
                        {/* search 无需变化 */}
                        {/* <Route path="/router-two/two" component={Two}></Route> */}
                        {/* params 无需变化 */}
                        {/* <Route path="/router-two/two/:name/:age/:type" component={Two}></Route> */}
                        {/* state 无需变化 */}
                        <Route path="/router/router-two/two" component={Two}></Route>
                        <Redirect to="/router/router-two/one" ></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
