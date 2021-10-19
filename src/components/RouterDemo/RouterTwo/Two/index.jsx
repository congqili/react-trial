import React, { Component } from 'react'
// import aq from 'query-string'
export default class RTTwo extends Component {
    render() {
        //search
        // const {search}=this.props.location
        // const {name,age,type}=aq.parse(search)||{}
        //params
        // const {params}=this.props.match
        // const {name,age,type}=params||{}
        //state
        const {state}=this.props.location
        const {name,age,type}=state||{}
        return (
            <div>
                <ul>
                    <li>姓名:{name}</li>
                    <li>年龄:{age}</li>
                    <li>参数类型:{type}</li>
                </ul>
            </div>
        )
    }
}
