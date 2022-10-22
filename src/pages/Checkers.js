import React from 'react';
import Game from '../games/Game';
import Board from '../games/checkers/Board';

function Checkers() {
    return (
        <div className={'content'}>
            <Game board={<Board />}/>
        </div>
    );
}

export default Checkers;
