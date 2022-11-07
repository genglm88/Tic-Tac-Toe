import React from 'react'
import Square from './Square';
import styled from 'styled-components'

const StyledBoard = styled.div`  
 
    width: 307px;
    height: 307px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
    border: 4px solid darkblue;
    border-radius: 10px;
`

const Board = ({squares, onClick}) => (
    <StyledBoard>
       {
        squares.map((square, index) =>{    
            return (
                <Square 
                    key= {index} 
                    boxNum = {index}
                    value ={square} 
                    onClick= {()=>onClick(index)} 
                />
        )})
       } 
        
    </StyledBoard>  
)
 
export default Board;
 
