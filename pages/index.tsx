import type { NextPage } from 'next'
import React, { useEffect, useState} from 'react'
import { Menu } from '../components/menu/Menu'
import { Productos } from '../components/productos/Productos'
import { GlobalProvider } from '../context/GlobalProvider'

const Home: NextPage = () => {

  return (
    <GlobalProvider>
    <div>
      <Menu />
      <Productos/>
    </div>
    </GlobalProvider>
  )
}

export default Home
