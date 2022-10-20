import React, { useState } from 'react';
import Square from './Square';

function Board() {
    const [state, setState] = useState({
        status: 'X goes first!',
        squares: Array(9).fill(null),
        winningSquares: [-1, -1, -1],
        xIsNext: true,
    });

    function renderBoard() {
        let board = [];
        for (let i = 0; i < 9; i++) {
            board[i] = renderSquare(i);
        }

        const winner = calculateWinner(state.squares);
        if (winner) {
            state.status = 'Winner: ' + winner;
        } else {
            state.status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
        }

        return board;
    }

    function isWinningSquare(i) {
        return state.winningSquares?.includes(i);
    }

    function renderSquare(i) {
        let color = 'blue';
        if (isWinningSquare(i)) {
            color = 'orange';
        }
        return (
            <Square value={state.squares[i]} color={color} key={i} onClick={() => handleClick(i)} />
        );
    }

    function handleClick(i) {
        const squares = state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = state.xIsNext ? 'X' : 'O';
        setState({
            squares: squares,
            xIsNext: !state.xIsNext,
        });
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                if (squares[a] !== null && squares[b] !== null && squares[c] !== null) {
                    state.winningSquares = [a, b, c];
                    for (let i = 0; i < 3; i++) {
                        console.log(state.winningSquares[i]);
                    }
                    return squares[a];
                }
            }
        }
        return null;
    }

    return (
        <div>
            <h2 className="status">{state.status}</h2>
            <div className="board">{renderBoard()}</div>
        </div>
    );
}

export default Board;
