import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { GlobalProvider } from '../context/GlobalProvider'

const pruebas = () => {


  const { globalState } =  useContext( GlobalContext )
  
  console.log(globalState)

  return (
    <GlobalProvider>
        <div>
            <h1>Profesores</h1>
            
        </div>
    </GlobalProvider>
  )
}

export default pruebas