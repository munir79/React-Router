import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const details=useLoaderData();
    console.log(details);
    return (
        <div>
            <h3> Everything you know about This Person</h3>
            <h4> Name:{details.name}</h4>
            <h5> call her/him:{details.phone}</h5>
        </div>
    );
};

export default FriendDetails;