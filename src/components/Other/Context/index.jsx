import React from 'react'
const MyContext=React.createContext()
const {Consumer,Provider}=MyContext
export default function ContextDemo() {
    
    return (
        <div>
            <Provider value={{name:1212}}>
                <One/>
            </Provider>
        </div>
    )
}
function One() {
    return (
        <div>
            One
            <Two/>
        </div>
    )
}
function Two() {
    return (
        <div>
            Two
            <Three>ContextDemo</Three>
        </div>
    )
}
function Three() {
    return (
        <div>
            Three
            <Consumer>
                {value=>{
                    return value.name
                }}
            </Consumer>
        </div>
    )
}
