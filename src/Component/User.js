import React from 'react';
import '../Style/User.css';
import { Link } from 'react-router-dom';

const User = (props) => {
  console.log(props);
    const {name,email,username,id}=props.friend;
    return (
        <div className='user1'> 
            <h4> Name:{name}</h4>
            <h5> email:{email}</h5>
            <h3> UserName: <Link to={`/friend/${id}`}>   {username}</Link>  </h3>
        </div>
    );
};

export default User;