import React from 'react'
import ReactDOM from "react-dom"
import Game from './components/Game'
import {GameContextProvider} from "./GameContext"

import "./css/styles.css"

const  App = ()=> {
    return (
        <GameContextProvider>
                <Game />  
        </GameContextProvider>   
       )
}  

export default App