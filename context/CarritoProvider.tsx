import React, {useEffect} from 'react'
import { CarritoContext } from './CarritoContext'

interface props {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE = {
  productos:[
    
  ],
  cart:[

  ],
  totalCart:0
}

export const CarritoProvider = ({children}:props) => {

  useEffect(() => {
    localStorage.getItem("carrito")
  }, [])
  

  return (
    <CarritoContext.Provider value={INITIAL_STATE} >
        {children}
    </CarritoContext.Provider>
  )
}
