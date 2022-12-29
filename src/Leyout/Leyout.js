import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Sheared/Footer/Footer';
import Header from '../Components/Sheared/Header/Header';


const Leyout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Leyout;