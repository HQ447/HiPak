import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingBar from './FloatingBar';

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <FloatingBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
