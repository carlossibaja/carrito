import type { NextPage } from 'next'
import { Menu } from '../components/menu/Menu'
import { Productos } from '../components/productos/Productos'

const Home: NextPage = () => {
  return (
    <div>
      <div style={{backgroundColor:"#d6e6d5", color:"#466443",fontWeight:"600", textAlign:"center", padding:"5px"}}>
          <p>Hecho por: Carlos Sibaja - Angel Villar - Edwin Peñarredonda - Mauricio Galvan</p>
      </div>
      <Menu/>
      <Productos/>
    </div>
  )
}

export default Home
