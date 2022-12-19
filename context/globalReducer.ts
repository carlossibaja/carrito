import { GlobalState } from "../interfaces/interfaces"


type globalAction = 
    |{type:"addUser", payload:{}}


export const globalReducer = ( state:GlobalState , action:globalAction ) => {
    switch( action.type ){
        case "addUser":
            return
        
        default:
            return state
    }
}