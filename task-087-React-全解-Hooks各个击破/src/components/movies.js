import React, {useState, useReducer, useContext, useEffect, createContext} from 'react'
import Context from '../Context'
import ajax from '../ajax'

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

  export default Movies