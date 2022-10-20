import React from 'react';
import {Outlet} from 'react-router-dom';
import Nav from '../Nav';

function Layout() {
    return (
        <>
            <Nav/>
            <Outlet className="main"/>
        </>
    );
}

export default Layout;
