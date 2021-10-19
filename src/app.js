import React ,{Component}from "react";
import './app.less'
// import Hello  from "./components/Hello";
// import World from "./components/World";
// import AddList from "./components/AddList";
// import Abc from "./components/Networlk/one/index.jsx"
// import RouterDemo from './components/RouterDemo'
// import ReduxDemo from "./components/ReduxDemo";
//使用redux需外部包裹容器
// import store from "./redux/store";
// import Count from "./containers/count/index.jsx"
import Home from './components/Home'
class App extends Component{
    render(){
        return (
        <div>
            {/* <AddList/> */}
            {/* <Abc/> */}
            {/* <RouterDemo/> */}
            {/* <Count store={store}/> */}
            {/* <Count/> */}
            {/* <ReduxDemo/> */}
            <Home/>
        </div>
        )
    }
}

export default App