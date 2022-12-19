export interface cart {
    imagen:string,
    nombre:string,
    precio:number,
    cantidad:number,
    id:number,
    total:number
}

export interface User {
  id:Number,
  name:string,
  lastname:string 
}

export interface GlobalState {
    users:User[]
}