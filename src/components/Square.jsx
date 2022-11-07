import React, {useContext} from 'react'
import styled, {keyframes} from "styled-components"
import {GameContext} from "../GameContext"

const StyledSquare =styled.button`
    background-color: ${({isMatch})=> isMatch ? "yellow" :"lightblue"};
    border: 1px solid darkblue;
    width: 100px;
    height: 100px;
    font-weight: 800;
    font-size: 30px;
    cursor: pointer;
    outline: none;
`
const blink = keyframes`
    50% {background-color: transparent}
`

const BlinkSquare = styled(StyledSquare)`
    animation: ${blink} 1s cubic-bezier(0.79, 0.33, 0.14, 0.53)  infinite;
`

const Square = ({boxNum,value, onClick}) => {
    const {winner, draw} = useContext(GameContext)
    let isMatch = false
    if (draw) {isMatch = true}
    if (winner)  {isMatch = winner.includes(boxNum) }
    return (
          !isMatch ? 
                <StyledSquare  onClick={onClick} isMatch = {isMatch}>
                    {value}
                </StyledSquare>
                : 
                <BlinkSquare  onClick={onClick} isMatch = {isMatch}>
                    {value}
                </BlinkSquare>
        )
}
   

 
export default Square;