import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <Outlet className="main"/>
            </>
        );
    }
}

export default Layout;
