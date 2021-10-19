import React, { Component,lazy,Suspense } from 'react'
import { Link,Switch ,Route,Redirect} from 'react-router-dom'
const lazyOne=lazy(()=>import('./lazyComponent/one.jsx'))
const lazyTwo=lazy(()=>import('./lazyComponent/two.jsx'))
/*
    若想看到效果，请将No throttling 改为 fast 3G
*/
export default class Other extends Component {
    render() {
        return (
            <div>
                <h2>one</h2>
                <ol>
                    <li>setState</li>
                    <li>lazy</li>
                </ol>
                <h2>two</h2>
                <ol>
                    <li>Hooks</li>
                    <li>useEffect</li>
                    <li>fragment</li>
                    <li>slot</li>
                </ol>
                <Link to='/other/lazyOne'>lazyOne</Link>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to="/other/lazyTwo">lazyTwo</Link>
                <div>
                    <Suspense  fallback={<div>正在加载</div>}>
                        <Switch>
                            <Route path="/other/lazyOne" component={lazyOne}/>
                            <Route path="/other/lazyTwo" component={lazyTwo}/>
                            <Redirect to="/other/lazyOne"/>
                        </Switch>
                    </Suspense >
                </div>
                
            </div>
        )
    }
}
