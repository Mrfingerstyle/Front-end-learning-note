import React, {useState, useReducer, useContext, useEffect, createContext} from 'react'
// import ReactDOM from 'react-dom'

// useState
// function App() {
//   // const [user, setUser] = useState({name: 'frank', age: 18})
//   const [n, setN] = useState(0)
//   const onClick = () => {
//     // 注意 1
//     // 不可局部更新 否则改变整个对象
//     // 因为setState不会帮我们合并属性
    
//     // setUser({
//     // ...user,
//     // name: 'jack'
//     // })

//     // 注意 2 地址要变
//     // setState(obj) 如果obj地址不变 那么React认为数据没有变化
//     // user.name = 'jack'
//     // setUser(user)

//     // 注意 3 接受函数
//     // setN(n + 1)
//     // setN(n + 1)

//     // useState接受函数
//     // 该函数返回初始state 且执行1次

//     // setState接受函数 连续多次操作 建议使用函数
//     setN(i => i + 1)
//     setN(i => i + 1)
//   }
//   return (
//     <div className="App">
//       {/* <h1>{user.name}</h1> */}
//       <h1>{n}</h1>
//       <button onClick={onClick}>click</button>
//     </div>
//   );
// }

// useReducer

// const initial = {
//   n: 0
// }

// const reducer = (state, action) => {
//   if (action.type === 'add') {
//     return {
//       n: state.n + action.number
//     }
//   } else if(action.type === 'mul') {
//     return {
//       n: state.n * 2
//     }
//   } else {
//     throw new Error('unknown  type')
//   }
// }


// function App() {
//   const [state, dispatch] = useReducer(reducer, initial)

//   const {n} = state
//   const onClick = () => {
//     dispatch({type:'add', number: 2})
//   }

//   return (
//     <div className="App">
//       <h1>{n}</h1>
//       <button onClick={onClick}>click</button>
//     </div>
//   );
// }

// const initFormData = {
//   name: "",
//   age: 18,
//   nationality: "汉族"
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "patch":
//       return { ...state, ...action.formData };
//     case "reset":
//       return initFormData;
//     default:
//       throw new Error();
//   }
// }

// function App() {
//   const [formData, dispatch] = useReducer(reducer, initFormData);
//   // const patch = (key, value)=>{
//   //   dispatch({ type: "patch", formData: { [key]: value } })
//   // }
//   const onSubmit = () => {};
//   const onReset = () => {
//     dispatch({ type: "reset" });
//   };
//   return (
//     <form onSubmit={onSubmit} onReset={onReset}>
//       <div>
//         <label>
//           姓名
//           <input
//             value={formData.name}
//             onChange={e =>
//               dispatch({ type: "patch", formData: { name: e.target.value } })
//             }
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           年龄
//           <input
//             value={formData.age}
//             onChange={e =>
//               dispatch({ type: "patch", formData: { age: e.target.value } })
//             }
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           民族
//           <input
//             value={formData.nationality}
//             onChange={e =>
//               dispatch({
//                 type: "patch",
//                 formData: { nationality: e.target.value }
//               })
//             }
//           />
//         </label>
//       </div>
//       <div>
//         <button type="submit">提交</button>
//         <button type="reset">重置</button>
//       </div>
//       <hr />
//       {JSON.stringify(formData)}
//     </form>
//   );
// }

const store = {
  user: null,
  books: null,
  movies: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'setUser': 
      return {...state, user: action.user}
    case 'setBooks':
      return {...state, user: action.books}
    case 'setMovies':
      return {...state, user: action.movies}
    default:
      throw new Error()
  }
}

const Context  = createContext(null)


function App() {
  // 只能运行在函数外面
  const [state, disPatch] = useReducer(reducer, store)

  return(
    <Context.Provider value={{state, disPatch}}>
      <User/>
      <hr/>
      <Books/>
      <Movies/>
    </Context.Provider>
  )
}

function User() {
  const {state, disPatch} = useContext(Context)
  
  useEffect(()=>{
    ajax('/user').then((user)=>{
      disPatch({type: 'setUser', user})
    })
  } ,[])

  return(
    <div>
      <h3>my user</h3>
      <div>name -- {state.user ? state.user.name : ''}</div>
    </div>
  )
}

function Books() {
  const {state, disPatch} = useContext(Context)
  useEffect(()=>{
    ajax('/books').then((books)=>{
      disPatch({type: 'setBooks', books: books})
    })
  } ,[])

  return(
    <div>
      <h3>my books</h3>
      <ol>
        {state.books ? state.books.map(book => <li key={book.id}>{book.name}</li>) : "加载中"}
      </ol>
    </div>
  )
}
function Movies() {
  const {state, disPatch} = useContext(Context)
  useEffect(()=>{
    ajax('/movies').then((movies)=>{
      disPatch({type: 'setMovies', movies: movies})
    })
  } ,[])

  return(
    <div>
      <h3>my movies</h3>
      <ol>
        {state.movies
          ? state.movies.map(movie => <li key={movie.id}>{movie.name}</li>)
          : "加载中"}
      </ol>
    </div>
  )
}

// 假 ajax
// 两秒钟后，根据 path 返回一个对象，必定成功不会失败
function ajax(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === "/user") {
        resolve({
          id: 1,
          name: "Frank"
        });
      } else if (path === "/books") {
        resolve([
          {
            id: 1,
            name: "JavaScript 高级程序设计"
          },
          {
            id: 2,
            name: "JavaScript 精粹"
          }
        ]);
      } else if (path === "/movies") {
        resolve([
          {
            id: 1,
            name: "爱在黎明破晓前"
          },
          {
            id: 2,
            name: "恋恋笔记本"
          }
        ]);
      }
    }, 2000);
  });
}

export default App;
