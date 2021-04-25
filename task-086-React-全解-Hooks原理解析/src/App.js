import React, {useRef, useContext} from 'react'
import ReactDOM from 'react-dom'


// 每次执行 state都被赋值为0
// 完全没有变化
// 因为myUseState会讲state重置
// 我们需要一个不被myUseState重置的变量 
// 这个变量只要声明在myUseState外面即可


// let _state
// function myUseState(initialValue) {
//   console.log('myUseState run');
//   _state = _state === undefined ? initialValue : _state
//   const setState = (newValue) => {
//     _state = newValue
//     render()
//   }
//   return [_state, setState]
// }
// 实现useState

// let _state = []
// let index = 0

// function myUseState(initialValue) {
//   const currentIndex = index
//   _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
//   const setState = (newValue) => {
//     _state[currentIndex] = newValue
//     console.log(_state);
//     render()
//   }
//   index += 1
//   return [_state[currentIndex], setState]
// }

// const render = () => {
//   index = 0
//   ReactDOM.render(
//     <App />, document.getElementById('root')
// );
// }


// function App() {
//   const [n, setN] = myUseState(0)
//   const [m, setM] = myUseState(0)
//   // 报错
//   // let m, setM
//   // const [n, setN] = React.useState(0)
//   // if (n % 2 === 1) {
//   //   [m, setM] = React.useState(0)
//   // }

//   return (
//     <>
//       <p>{n}</p>
//       <button onClick={()=>{setN(n + 1)}}>add 1</button>
//       <p>{m}</p>
//       <button onClick={()=>{setM(m + 1)}}>add 1</button>
//     </>
//   );
// }

// n的分身

// 如果希望有一个贯穿始终的状态 怎么做 

// function APP() {
//   // const [n, setN] = React.useState(0)
//   const nRef = React.useRef(0)
  
//   const log = () => {
//     setTimeout(()=>{
//       console.log(`n ${nRef.current}`);
//     },1000)
//   }
//   // 使用useState代替update功能
//   const update = React.useState(null)[1]

//   return (
//     <div>
//     <p>{nRef.current}这里不能实时更新</p>
//     <p>
//       {/* 先点击+1 再log 无bug */}
//       {/* 先点击log 再+1 有bug */}

//       {/* 此处的setN不会改变n */}
//       <button onClick={()=>{
//         nRef.current += 1;
//         update(nRef.current)
//       }}>+1</button>
//       <button onClick={log}>log</button>
//     </p>
//     </div>
//   )
// }

const themeContext = React.createContext(null)

function App(){
  const [theme, setTheme] = React.useState('red')
  return (
    <themeContext.Provider value={{theme, setTheme}}>
      <div className={`App ${theme}`}>
      <p>{theme}</p>
      <div>
        <ChildA/>
      </div>
      <div>
        <ChildB/>
      </div>
      </div>
    </themeContext.Provider>
  )
}

function ChildA(){
  const {setTheme} = React.useContext(themeContext)
  return (
    <div>
      <button onClick={() => setTheme("red")}>red</button>
    </div>
  );
}

function ChildB(){
  const {setTheme} = React.useContext(themeContext)
  return (
    <div>
      <button onClick={() => setTheme("blue")}>blue</button>
    </div>
  );
}



export default App

