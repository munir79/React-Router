import React from 'react';
import Headr from '../Header/Headr';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Headr></Headr>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;