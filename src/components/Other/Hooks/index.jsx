import React from 'react'
import { Button } from 'antd'
export default function Hookds() {
    const [name,setName]=React.useState('李')
    const handName=()=>{
        //1 
        // setName(name+'响')
        // 2
        setName((e)=>e+'响')

    }
    return (
        <div>
            <Button onClick={()=>{handName()}}>点击</Button><span>name:{name}</span>
        </div>
    )
}
