import React, { useState } from 'react';
import Square from '../Square';

function Board() {
    const [status, setStatus] = useState('Welcome to checkers!');
    const [squares, setSquares] = useState(Array(64).fill(null));

    function handleClick(i) {
        console.log('You clicked square #' + i);
    }

    function renderSquare(i, color) {
        return <Square value={squares[i]} color={color} key={i} onClick={() => handleClick(i)} />;
    }

    function renderBoard() {
        let board = [];
        let k = 0;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let color = (i + j) % 2 === 0 ? 'gray' : 'white';
                board[k] = renderSquare(k, color);
                k++;
            }
        }

        return board;
    }

    function newGame() {
        setStatus('Welcome to checkers!');
        setSquares(Array(64).fill(null));
    }

    return (
        <div>
            <h2 className="status">{status}</h2>
            <div className="board-8x8">{renderBoard()}</div>
            <button className="button" onClick={newGame}>
                New Game
            </button>
        </div>
    );
}

export default Board;
