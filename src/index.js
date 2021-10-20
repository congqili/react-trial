import App from "./app"
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import store from './redux/store'
import { Provider } from "react-redux"

//subscribe 用于redux改变更新模板，（改一下整个组件性能问题不用考虑，有虚拟DOM）
// ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))
// store.subscribe(()=>{
//     ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))
// })
/*
    Provider：如果使用容器组件，就不需要storestore.subscribe(handler)
    storestore.subscribe(handler):在组件中使用，当store改变时触发。
 */
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
,document.getElementById('root'))

