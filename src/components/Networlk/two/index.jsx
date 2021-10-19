import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class index extends Component {
    state={
        iptValue:''
    }
    
    handSubmit=()=>{
        // const {iptValue:{value:params}}=this.state
        PubSub.publish('abcd', 'hello world!');
        this.handNetwork()
    }
    setTextValue=(e)=>{
        this.setState({
            iptValue:e
        })
    }
    //asios/fetch  对比
    handNetwork=()=>{
        // fetch('/api/serch/userName')
        // .then(function(response) {
        //     return response.json();
        // })
        // .then(function(myJson) {
        //     console.log(myJson);
        // });
        axios.get('/api/serch/userName').then(res=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.setTextValue}/>
                <button onClick={this.handSubmit}>搜 索</button>
            </div>
        )
    }
}
