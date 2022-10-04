
type CartAction = 
    |{type:"addCart", payload:{}}
    |{type:"deleteCart", payload:{}}
    |{type:"updateCart", payload:{}}


export const cartReducer = ( state:any , action:CartAction ) => {

    switch (action.type) {
        case "addCart":
            return

    
        default:
            return state
    }

}