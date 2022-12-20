import type { NextPage } from 'next'
import React, { useEffect, useState} from 'react'
import { Menu } from '../components/menu/Menu'
import { Productos } from '../components/productos/Productos'

const Home: NextPage = () => {

  return (
    <div>
      <Menu />
      <Productos/>
    </div>
  )
}

export default Home
