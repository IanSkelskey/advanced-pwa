import React from 'react';
import "./styles/Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="navbar">
            <h1>Advanced PWA</h1>
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/tictactoe">Tic-Tac-Toe</Link>
            </ul>
        </div>
    )
}

export default Nav;