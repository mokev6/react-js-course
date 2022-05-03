import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Content from './Content';
import SideNav from './SideNav/SideNav';
import { Outlet } from 'react-router-dom';

function Layout() {

    console.log("render layout")

    return (
        <>
            <Header />
            <SideNav />
            <Content>
                <Outlet />
            </Content>
            <Footer />
            <BackToTop />
        </>
    );
}

export default Layout;