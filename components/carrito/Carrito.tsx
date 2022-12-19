
import { useCart } from '../../hooks/useCart'
import styles from "../carrito/carrito.module.css"


export const Carrito = () => {
  
  const { carrito, setCarrito } = useCart()
   
  const valores = carrito.map(valor => valor.total)
  const initialValue = 0
  const total = valores.reduce(
    (previusValue,currentValue) => previusValue + currentValue,
    initialValue
  )

  // console.log(total)
  function currencyFormat(num:Number) {
    return '$ ' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const deleteProducts = () => {
    localStorage.removeItem("carrito")
    setCarrito([])
  }

  const incrementCuantity = (id:Number) => {

    carrito.find(producto  => {
      if(producto.id === id){
        producto.cantidad = producto.cantidad +1
        producto.total = producto.cantidad * producto.precio
      }
    })
    
    localStorage.setItem("carrito", JSON.stringify(carrito))
    const newData = JSON.parse(localStorage.getItem("carrito")as string)
    setCarrito(newData)

  }

  const decrementCuantity = (id:Number) => {

    carrito.find(producto  => {

      if(producto.id === id){
        producto.cantidad = producto.cantidad -1
        producto.total = producto.cantidad * producto.precio
        console.log(producto)

        localStorage.setItem("carrito", JSON.stringify(carrito))
        const newData = JSON.parse(localStorage.getItem("carrito")as string)
        setCarrito(newData)
      }

      if(producto.cantidad < 1){
        console.log(producto)
        const eliminado = carrito.filter(producto => producto.cantidad !== 0)
        
        localStorage.setItem("carrito", JSON.stringify(eliminado))
        const newData = JSON.parse(localStorage.getItem("carrito")as string )
        setCarrito(newData)
        return
      }
    })

  }

  return (
    <section className={styles.container} > 
      <h1>Mi carrito</h1>
        {
          (carrito.length === 0)
            ?<div style={{display:"flex",alignItems:"center",height:"80vh",justifyContent:"center"}} >
              <h1 style={{fontSize:"40px", color:""}} >No hay Elementos</h1>
            </div>
            :<div className={styles.carrito} >
              <div className={styles.productos} >
                {
                  carrito.map(productos => (
                    <div key={productos.imagen} className={styles.card} >
                      <div style={{display:"flex",alignItems:"center", width:"50%"}} >
                        <img className={styles.img} src={`${productos.imagen}`} alt="" />
                        <div >
                          <p>{productos.nombre}</p>
                          <p>{ currencyFormat(productos.precio)}</p>
                        </div>
                      </div>
                      <div style={{display:"flex", justifyContent:"space-between"}} >
                        <button style={{padding:"5px"}} onClick={()=> decrementCuantity(productos.id) } >-</button>
                        <p style={{width:"25%", padding:"5px", fontWeight:"600"}} >{productos.cantidad}</p>
                        <button style={{padding:"5px"}} onClick={()=> incrementCuantity(productos.id)} >+</button>
                      </div>
                      <p style={{width:"25%"}} >Total: { currencyFormat(productos.total)}</p>
                    </div>
                  ))
                }
              </div>
              <div className={styles.containerTotal} >
                <div  >
                  <div className={styles.total} style={{display:"flex", justifyContent:"space-between" }} >
                    <p style={{fontSize:"20px", fontWeight:"700"}} >Total</p>
                    <p>{currencyFormat(total)}</p>
                  </div>
                </div>
              </div>
              
            </div>
       
          
        }
        <button onClick={() => deleteProducts()} >Eliminar Todos los productos</button>
        
    </section>
  )
}
