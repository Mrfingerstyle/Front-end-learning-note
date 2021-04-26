import React, {useState, useReducer, useContext, useEffect, createContext} from 'react'
import Context from '../Context'
import ajax from '../ajax'

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

  export default User