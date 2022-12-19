import { createContext } from "react";
import { GlobalState } from "../interfaces/interfaces";


export type GlobalContextProps = {
    globalState : GlobalState
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps )