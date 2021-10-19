import React,{Component} from "react";
import hello from "./index.module.css"
class Hello extends Component{
    render(){
        return (
            <div>
                <h1 className={hello.h1}>hello h1</h1>
                <h2 className={hello.h2}>hello h1</h2>
            </div>
        )
    }
}
export default Hello
