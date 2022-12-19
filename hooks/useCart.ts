import { useEffect, useState } from "react"
import { cart } from "../interfaces/interfaces"


export const useCart = ()=> {

    const [carrito, setCarrito] = useState<cart[]>([])
    useEffect(() => {
        const getCarrito = async() => {
          const  carrito = await localStorage.getItem("carrito") as string
          const carritoObjet =  JSON.parse(carrito)
          // console.log(carritoObjet)
          if(carritoObjet === null ){
            setCarrito([])
          }else{
            setCarrito(carritoObjet)
          }
        }
        getCarrito()
      }, [])

    return{
        carrito,
        setCarrito
    }
}