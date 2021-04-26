import React, {useState, useReducer, useContext, useEffect, createContext} from 'react'

import ReactDOM from 'react-dom';
// import App from './App';

import User from './components/user'
import Books from './components/books'
import Movies from './components/movies'
import Context from './Context'
import user_reducer from './reducers/user_reducer'
import book_reducer from './reducers/book_reduce'
import movie_reducer from './reducers/movie_reduce'

const store = {
  user: null,
  books: null,
  movies: null
}

const obj = {
  ...user_reducer,
  ...book_reducer,
  ...movie_reducer
}


const reducer = (state, action) => {
  const fn = obj[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    throw new Error('wrong type')
  }
}

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

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
