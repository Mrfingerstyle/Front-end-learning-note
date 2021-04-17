import React from 'react'
const App = ()=>{
    return (
        <div>
            <span>App组件</span>
            <Component numbers = {['a', 'b', 'c']}/>
            <IfComponent/>
        </div>
    )
}



const Component = (props)=> {
    return props.numbers.map((val, index) => {
        return <div key={index.toString()}>下标 {index} 值 {val}</div>
    })    
}

let n = 10
const IfComponent = () => {
    return n % 2 === 0 ? <div>n 是偶数</div> : <div>n 是奇数</div>
}




export default App