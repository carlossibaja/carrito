import Link from 'next/link'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from "../menu/menu.module.css"


export const Menu = () => {
  return (
    <menu className={styles.menu} > 
        <div>
            <h2>LOGO</h2>
        </div>
        <div>
            <ul>
                <li className={styles.li} >
                    <Link href="/" ><a>Inicio</a></Link>
                </li>
                <li  className={styles.li} >
                    <Link href="/" ><a>Hombre</a></Link>
                </li>
                <li  className={styles.li} >
                    <Link href="/" ><a>Mujer</a></Link>
                </li>
                <li  className={styles.li} >
                    <Link href="/" ><a>Niños</a></Link>
                </li>
            </ul>
        </div>
        <div className={styles.carrito} >
            <Link href="/cart" >
                <div style={{display:"flex",alignItems:"center"}} >
                    <ShoppingCartOutlinedIcon/>
                    <a>Carrito</a>
                </div>
            </Link>
        
        </div>
    </menu>
  )
}
