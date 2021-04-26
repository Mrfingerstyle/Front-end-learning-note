import React, {useState, useReducer, useContext, useEffect, createContext} from 'react'
import Context from '../Context'
import ajax from '../ajax'

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

  export default Books