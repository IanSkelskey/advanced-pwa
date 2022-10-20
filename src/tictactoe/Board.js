import React, { useState } from 'react';
import Square from './Square';

function Board() {
    const [status, setStatus] = useState('Next player: X');
    const [squares, setSquares] = useState([]);

    for (let i = 0; i < 9; i++) {
        squares[i] = <Square key={i} num={i} />
    }

    // const squares = 

    return (
        <div>
            <div className='status'>{status}</div>
            <div className='board'>
                {squares}
            </div>
        </div>
    );
}

// function renderSquare(i) {
//     return <Square />;
// }

export default Board;
