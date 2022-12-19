import React, { useEffect, useState} from 'react'
import Link from 'next/link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from "../menu/menu.module.css"
import { useCart } from '../../hooks/useCart';

export const Menu = () => {
    
    const { carrito, setCarrito } = useCart()

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
                    <p style={{
                        backgroundColor:"#d6e6d5", 
                        padding:"5px", 
                        borderRadius:"100%", 
                        width:"25px", height:"25px", 
                        display:"flex", 
                        justifyContent:"center", 
                        alignItems:"center",
                        right:"160px",
                        top:"35px"
                    }} >{carrito.length}</p>
                    <ShoppingCartOutlinedIcon/>
                    <a>Carrito</a>
                </div>
            </Link>
        
        </div>
    </menu>
  )
}
