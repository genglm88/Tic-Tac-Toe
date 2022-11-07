import React, {useState} from 'react'
import {calculateWinner} from "./helper"
const GameContext = React.createContext()

const GameContextProvider = ({children}) => {
    const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)])
    const [currentMoveNumber, setCurrentMoveNumber]= useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const currentBoard = boardHistory[currentMoveNumber]
    const winner = calculateWinner(currentBoard)
    const draw = !currentBoard.includes(null) 
 

    const handleClick = (boxNumber) => {
    
 
        const boardCopy = [... currentBoard]
        if (winner || boardCopy[boxNumber]) return
        boardCopy[boxNumber] = xIsNext ? "X" : "O"
        setXIsNext(!xIsNext)
        setBoardHistory([...boardHistory, boardCopy])
        setCurrentMoveNumber(boardHistory.length)
    }
     
    const jumpTo = (currentMove) => {
        setCurrentMoveNumber(currentMove)
        const currentBoardHistory = boardHistory.slice(0, currentMove+1)
        setBoardHistory(currentBoardHistory)
        setXIsNext(currentMove ? flase : true)
       
    }

    return (
        <GameContext.Provider value={{
            boardHistory,
            currentMoveNumber,
            xIsNext,
            winner,
            handleClick,
            jumpTo,
            draw
        }}>
            {children}
        </GameContext.Provider>
      )
}
 
export  {GameContextProvider, GameContext}
