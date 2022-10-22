import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className={'navbar'}>
            <div className={'nav-logo'}>Advanced PWA</div>
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/tictactoe">Tic-Tac-Toe</Link>
                <Link to="/checkers">Checkers</Link>
            </ul>
        </div>
    );
}

export default Nav;
