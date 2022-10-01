import React from 'react'
import { Carrito } from '../components/carrito/Carrito'
import { Menu } from '../components/menu/Menu'

const cart = () => {
  return (
    <div >
        <div style={{backgroundColor:"#d6e6d5", color:"#466443",fontWeight:"600", textAlign:"center", padding:"5px"}}>
          <p>Hecho por: Carlos Sibaja - Angel Villar - Edwin Peñarredonda - Mauricio Galvan</p>
        </div>
        <Menu/>
        <Carrito/>
    </div>
  )
}

export default cart