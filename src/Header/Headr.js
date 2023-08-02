import React from 'react';
import { Link } from 'react-router-dom';

const Headr = () => {
    return (
        <div>
            <Link to='/home'> Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Products</Link>
            <Link to='/friend'> Friends</Link>
        </div>
    );
};

export default Headr;