import React from 'react';
import Game from '../games/Game';
import Board from '../games/tictactoe/Board';

function TicTacToe() {
    return (
        <div className={'content'}>
            <Game board={<Board />}/>
        </div>
    );
}

export default TicTacToe;
