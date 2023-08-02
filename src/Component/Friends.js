import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';


const Friends = () => {
    const friends=useLoaderData();
    return (
        <div >
            <h3> total users:{friends.length}</h3>
            {
                friends.map(friend=> <User key={friend.id} friend={friend} ></User>)
            }
        </div>
    );
};

export default Friends;