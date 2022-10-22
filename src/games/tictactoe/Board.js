import React, { useState } from 'react';
import Square from '../Square';

function Board() {
    const [status, setStatus] = useState('X goes first!');
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winningSquares, setWinningSquares] = useState([-1, -1, -1]);
    const [xIsNext, setXIsNext] = useState(true);

    function newGame() {
        setStatus('X goes first!');
        setSquares(Array(9).fill(null));
        setWinningSquares([-1, -1, -1]);
        setXIsNext(true);
    }

    function renderBoard() {
        let board = [];
        for (let i = 0; i < 9; i++) {
            board[i] = renderSquare(i);
        }

        return board;
    }

    function isWinningSquare(i) {
        return winningSquares?.includes(i);
    }

    function renderSquare(i) {
        let color = 'blue';
        if (isWinningSquare(i)) {
            color = 'orange';
        }
        return <Square value={squares[i]} color={color} key={i} onClick={() => handleClick(i)} />;
    }

    function handleClick(i) {
        const newSquares = squares.slice();
        const winner = calculateWinner(newSquares);
        if (winner || newSquares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        const newWinner = calculateWinner(newSquares);
        if (newWinner) {
            setStatus('Winner: ' + newWinner);
            return;
        }
        setXIsNext(!xIsNext);
        setStatus('Next player: ' + (!xIsNext ? 'X' : 'O'));
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
                    setWinningSquares([a, b, c]);
                    return squares[a];
                }
            }
        }
        return null;
    }

    return (
        <div>
            <h2 className="status">{status}</h2>
            <div className="board-3x3">{renderBoard()}</div>
            <button className="button" onClick={newGame}>
                New Game
            </button>
        </div>
    );
}

export default Board;
