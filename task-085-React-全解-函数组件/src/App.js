import React, {useState, useEffect} from 'react'

// 函数组件 比 class组件写起来更简单
// 消除了this
// const App = (props) => {
//   // useState(0) 返回两个API 一个读 一个写
//   // const [n, setN] = useState(0)
//   const [n, setN] = useState(0)
//   const [m, setM] = useState(0)
//   const onClickN = () => {
//     setN(n + 1)
//   }
//   const onClickM = () => {
//     setM(m + 1)
//   }

//   // 第二个参数 空数组表示只在第一次渲染时调用 
//   // 模拟componentDidMount
//   useEffect(()=>{
//     console.log('第一次渲染');
//   },[])

//   // 模拟componentDidUpdate
//   // 数组不写 任何一个state变化都会执行这个函数
//   useEffect(()=>{
//     console.log('n or m更新');
//   }, [n, m])

//   useEffect(()=>{
//     console.log('任意属性更新');
//   })

//   // 模拟componentDidUnmount
//   useEffect(()=>{
//     console.log('第一次渲染');
//   },[])




//   return (
//     <div>
//       <span>{n}</span>
//       <button onClick={onClickN}>add 1</button>
//       <hr/>
//       <span>{m}</span>
//       <button onClick={onClickM}>add 1</button>
//     </div>
    
//   );
// }

// const X = ()=>{
//   return <div>xxx</div>
// }
// const Y = ()=>{
//   return <div>yyy</div>
// }

// const App = props => {
//   const [childVisible, setChildVisible] = useState(true)
//   const hide = () => {
//     setChildVisible(false)
//   }
//   const show = () => {
//     setChildVisible(true)
//   }

//   return(
//     // <div>
//     //   {childVisible ? <button onClick={hide}>hide</button> : <button onClick={show}>show</button>}
//     //   {childVisible ? <Child/> : null}
//     // </div>

//     // 函数即组件 
//     <>
//       <X></X>
//       <Y></Y>
//     </>
//   )  
// }

// // react大多数功能都是函数实现

// const Child = (props) => {

//   // 元素消失的时候才会作用
//   // 模拟componentDidUnmount
//   useEffect(()=>{
//     return ()=>{
//       console.log('组件将死');
//     }
//   })
//   return(
//     <div>Child</div>
//   )
// }

import useUpdate from './useupdate.js'

const App = (props) => {
  // useState(0) 返回两个API 一个读 一个写
  // const [n, setN] = useState(0)
  const [n, setN] = useState(0)
  const onClickN = () => {
    setN(n + 1)
  }

  useUpdate(()=>{
    console.log('变了');
  }, n)

  return (
    <div>
      <span>{n}</span>
      <button onClick={onClickN}>add 1</button>
    </div>
    
  );
}

export default App;
