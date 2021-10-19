import React, { Component } from 'react'
import RouterOne from "./RouterOne"
import ROuterTwo from './RouterTwo'
import {Link,Route,Switch,Redirect} from 'react-router-dom'
export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to='/router/router-one'>RouterOne</Link>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Link to="/router/router-two">RouterTwo</Link>
                </div>
                <div>
                    <Switch>
                        <Route path="/router/router-one" component={RouterOne}/>
                        <Route path="/router/router-two" component={ROuterTwo}/>
                        <Redirect to="/router/router-one"/>
                    </Switch>
                </div>
            </div>
        )
    }
}
