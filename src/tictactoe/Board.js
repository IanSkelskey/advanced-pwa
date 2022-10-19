import React, { useState } from 'react';
import Square from './Square';

function Board() {
    const [status, setStatus] = useState('Next player: X');
    return (
        <div>
            <div className='status'>{status}</div>
            <div className='board'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function renderSquare(i) {
    return <Square />;
}

export default Board;
