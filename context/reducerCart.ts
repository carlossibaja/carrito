


type cartReducer = 
    |{type:"addCart"}

export const reducerCart = (state:any, action: cartReducer) => {

    switch (action.type) {
        case "addCart":
            return "hola"
    
        default:
            return state
    }
}