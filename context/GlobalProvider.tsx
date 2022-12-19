import React, { useReducer} from 'react'
import { GlobalState } from '../interfaces/interfaces'
import { GlobalContext } from './GlobalContext'
import { globalReducer } from './globalReducer'


interface Props {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE:GlobalState = {
    users: [
        {
            name:"carlos",
            lastname:"sibaja",
            id:1
        },
        {
            name:"andres",
            lastname:"rodriguez",
            id:1
        },
    ]
}

export const GlobalProvider = ({children}:Props) => {
    
    const [globalState, dispatch] = useReducer<any>( globalReducer, INITIAL_STATE )
   
  return (
    <GlobalContext.Provider value={{globalState}} >
        {children}
    </GlobalContext.Provider>
  )
}
