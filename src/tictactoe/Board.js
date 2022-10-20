import React, { useState } from 'react';
import Square from './Square';

function Board() {
    const [state, setState] = useState({
        squares: Array(9).fill('\n'),
        xIsNext: true,
    });

    function renderBoard() {
        let board = [];
        for (let i = 0; i < 9; i++) {
            board[i] = renderSquare(i);
        }
        return board;
    }

    function renderSquare(i) {
        return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
    }

    function handleClick(i) {
        const squares = state.squares.slice();
        squares[i] = state.xIsNext ? 'X' : 'O';
        setState({
            squares: squares,
            xIsNext: !state.xIsNext,
        });
    }

    // const squares =
    const status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
    return (
        <div>
            <h2 className="status">{status}</h2>
            <div className="board">{renderBoard()}</div>
        </div>
    );
}

// function renderSquare(i) {
//     return <Square />;
// }

export default Board;
