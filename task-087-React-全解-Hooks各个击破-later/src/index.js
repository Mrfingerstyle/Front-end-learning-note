import React, { createContext, createRef, useCallback, useContext, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import useList from './hooks/useList'

// useContext 局部的全局变量
// const C = createContext(null)

// function App() {
//   const [n, setN] = useState(0)
//   return(
//     <C.Provider value={{n, setN}}>
//       <Fa/>
//     </C.Provider>
//   )
// }

// function Fa() {
//   return (
//     <>
//     <div>Father</div>
//     <So/>
//     </>
//   )
// }

// function So() {
//   const {n, setN} = useContext(C)
//   const onClick = ()=>{
//     setN(i => i + 1)
//   }
//   return(
//     <>
//     <div>
//       <span>
//       Son
//         </span> 
//       {n}
//       <button onClick={onClick}>+1</button>
//     </div>
//     </>
//   )
// }

// useEffect 
// function App() {
//   const [n, setN] = useState(0)
//   const onClick = () => {
//     setN(i => i + 1)
//   }
//   useEffect(()=>{
//     console.log('第一次渲染之后执行这句话');
//   }, [])
//   // [] 比哦啊是里面的变量变化时再次执行 也就是说不会再次执行

//   useEffect(()=>{
//     if (n !== 0) {
//       console.log('第1234次渲染之后执行这句话');
//     }
//   }, [n])
//   // 【n】n变化时执行

//   useEffect(()=>{
//       console.log('都会执行');
//   })
//   // 如果不写[] 表示任何变量变化时都会执行

  
//   return(
//     <>

//     <div>{n}</div>
//     <div><button onClick={onClick}>+1</button></div>
    
//     </>
//   )
// }

// function App() {
//   const [value, setValue] = useState(0)
//   // 优先使用
//   // useEffect(()=>{
//   // 在浏览器渲染前执行
//   useLayoutEffect(()=>{
//     document.querySelector('#x').innerText = 'value: 1000'
//   }, [value])
  
//   // useLayoutEffect 总是比 useEffect先执行
//   // useLayoutEffect 最好 改变了 layout 
//   // 为了用户体验 优先使用useEffect 优先渲染


//   return(
//     <>
//     <div id='x' onClick={()=>setValue(0)}>{value}</div>
//     {/* <div>{n}</div> */}
//     {/* <div><button onClick={onClick}>+1</button></div> */}
    
//     </>
//   )
// }

// function App() {
//   const [n, setN] = useState(0)
//   const [m, setM] = useState(0)

//   const onClick = ()=>{
//     setN(n + 1)
//   }
//   const onClick_2 = ()=>{
//     setM(m => m + 1)
//   }

  // 这一句话重新执行
  // App() 运行会生成新的函数
  // 新旧函数地址不一样 Child会认为onclick更新了 所以child run执行了

  // const onClickChild = () => {}

  // 使用useMemo解决
  // 第一个参数是()=>value 
  // 第二个参数是依赖 [m, n]
  // 依赖变化时 才计算 出新的value
  // 依赖不变 重用以前的value 
  // 类似 vue2 computed 
  // 如果value是函数 那么 就变成
  // 一个返回函数的函数
  // 很难用 所以有了 useCallback


  // const onClickChild = useMemo(()=>{
  //   return ()=>{}
  // }, [m])


//   const onClickChild = useCallback(
//     ()=>{console.log(m);}
//   , [m])

//   return(
//     <>
//     <div><button onClick={onClick}>update n {n}</button></div>
//     <div><button onClick={onClick_2}>update m {m}</button></div>
//     {/* child居然执行了 */}
//     <Child data={m} onClick={onClickChild}/>
//     </>
//   )
// }

// const Child = React.memo((props) => {
//   console.log('child run');
//   return(
//     <div onClick={props.onClick}>child {props.data}</div>
//   )
// })
// function Child(props){
//   console.log('child run');
//   return(
//     <div>child {props.data}</div>
//   )
// }

// 使用memo封装后 child不再执行 除非props变化
// const Child_2 = React.memo(Child)

// useRef

// function App() {
//   console.log('app run');
//   const count = useRef(0)
//   const [n, setN] = useState(0)
//   // 手动刷新页面
//   const [_, set_] = useState(null)
//   const onClick = () => {
//     setN(i => i + 1)
//   }

//   const onClick2 = () => {
//     count.current += 1
//     set_(Math.random())
//     console.log(count.current);
//   }

//   // useEffect(()=>{
//   //   count.current += 1
//   //   console.log(count.current);
//   // })



//   return(
//     <>
//     <div>{n}</div>
//     <div><button onClick={onClick}>+1</button></div>
//     <div><button onClick={onClick2}>update count {count.current}</button></div>
//     </>
//   )
// }

// function App(){
//   const buttonRef = useRef(null)

//   useEffect(() =>{
//     console.log(buttonRef.current);
//   })

//   return(
//     <div className="App">
//     <Button3 ref={buttonRef}>按钮</Button3>
//     </div>
//   )
// }

// const Button3 = React.forwardRef(
//   (props, ref) => {
//     const realButton = createRef(null)
//     const setRef = useImperativeHandle
//     setRef(ref, ()=>{
//       return{
//         x: ()=>{
//           realButton.current.remove()
//         },
//         read: realButton
//       }
//     })

//     console.log(props);
//     console.log(ref);
//     return(
//       <button className="red" ref={ref} {...props} />
//     )
//   }
// )

function App() {
  const { list, deleteIndex } = useList();
  return (
    <div className="App">
      <h1>List</h1>
      {list ? (
        <ol>
          {list.map((item, index) => (
            <li key={item.id}>{item.name}
            <button
                onClick={() => {
                  deleteIndex(index);
                }}
              >
                x
              </button>
            
            </li>
          ))}
        </ol>
      ) : (
        "加载中..."
      )}
    </div>
  );
}



ReactDOM.render(
    <App />,document.getElementById('root')
);
