import React, {useState, useContext} from 'react'
import Board from './Board';
import {GameContext} from "../GameContext"


import styled, {keyframes} from 'styled-components'

const StyledStatusMsg = styled.div`
    display: grid;
    margin: 0 auto;
    grid-gap: 5px;
    text-align: center;
    width: 300px;
    font-size: 30px;
`

const blinkText = keyframes`
        from {
            opacity: 0
        }
        to {
            opacity: 1
        }
`

const BlinkText = styled(StyledStatusMsg)`
    color: red;
    animation: ${blinkText} 1.5s ease-in-out infinite;
`

const Game = () => {
    const {boardHistory, currentMoveNumber, xIsNext, winner, handleClick, jumpTo, draw} = useContext(GameContext)
        
    const renderMoves = () => (
        boardHistory.map((_board, moveNumber)=> {
            const stepText = moveNumber ? `Restart from move #${moveNumber}`
                                        : `Start a new game`
            return (
                
                    <button className='button'  key = {moveNumber}
                           onClick = {() => jumpTo(moveNumber)}>   
                        {stepText}
                    </button>
            
                

            )
        }))
    
    const squares = boardHistory[currentMoveNumber]
    
    return ( 
        <>
            <StyledStatusMsg>
          
                <Board 
                    squares={squares} 
                    onClick={handleClick} 
                />
                       
                {winner  &&  <BlinkText>{"Winner: "+ squares[winner[0]]} </BlinkText> }
                {!winner && draw && <BlinkText>{"It's a draw!"} </BlinkText>}
                {!winner && !draw && "Next Player: " + (xIsNext? "X":"O")} 
                        
           
                {renderMoves()} 
            </StyledStatusMsg>
               
        
              

        </>

    )
}
 
export default Game;