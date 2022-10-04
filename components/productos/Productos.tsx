import React from 'react'
import { Products } from '../../database/database'
import styles from "../productos/productos.module.css"


export const Productos = () => {

    const addCart = ( nombre:string, cantidad:number, precio:number,imagen:string, id:number, total:number ) =>{
        const Data = {
            nombre,
            cantidad,
            precio,
            imagen,
            id,
            total
        }
        const getCarrito = localStorage.getItem("carrito") as string

        if(getCarrito === null ){
            localStorage.setItem("carrito", JSON.stringify([Data]))
        }else{
            const parseCarrito = JSON.parse(getCarrito)
    
            parseCarrito.push(Data)
            
            localStorage.setItem('carrito', JSON.stringify(parseCarrito))
        }

    }

    function currencyFormat(num:Number) {
        return '$ ' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


  return (
    <section className={styles.container} >
        <h3 style={{margin:"10px 0",fontSize:"25px"}} >Productos Destacados</h3>
        <div className={styles.productos} >
            {
                Products.map(producto => (
                    <div className={styles.card} key={producto.id} >
                        <div className={styles.cardImg} >
                            <img className={styles.img} src={`${producto.img}`} alt="" />
                        </div>
                        <div style={{padding:"5px"}} >
                            <p>{producto.name}</p>
                            <p>{currencyFormat(producto.price)}</p>
                        </div>
                        <div style={{padding:"5px"}} >
                            <button onClick={() => addCart(producto.name, 1,producto.price, producto.img, producto.id, producto.price)} className={styles.addcart}  >Añadir al carrito</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
