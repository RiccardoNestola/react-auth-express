import { Outlet } from "react-router-dom";
import React from 'react'
import Header from "../Components/Header/Header";

import Footer from '../Components/Footer/Footer'

const Layout = () => {

    return (
        <>

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout
