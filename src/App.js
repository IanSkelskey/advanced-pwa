import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import Checkers from './pages/Checkers';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="tictactoe" element={<TicTacToe />} />
                    <Route path="checkers" element={<Checkers />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
