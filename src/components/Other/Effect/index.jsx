import React from 'react'
import { Button } from 'antd';
export default function Effect() {
    React.useEffect(()=>{
        console.log('useEffect,[]时相当于类组件的conponentDidMontnd，某个值时相当于vue的watch');
        return ()=>{
            console.log('相当于componentWillUnmount()');
        }
    },[])
    const useref1=React.useRef()
    const getRef=()=>{
        console.log(useref1);
    }
    return (
        <div>
            Effect
            <h1 ref={useref1}>useRef</h1>
            <Button onClick={()=>{getRef()}}>点击获取ref</Button>
        </div>
    )
}
