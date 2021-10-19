import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class index extends Component {
    constructor(){
        super()
        PubSub.subscribe('abcd', function(a,b){
            console.log(a,b);
        } );
    }
    render() {
        
        return (
            <div>
                
            </div>
        )
    }
}
