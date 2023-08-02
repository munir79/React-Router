import React from 'react';

const User = (props) => {
  console.log(props);
    const {name,email}=props.friend;
    return (
        <div>
            <h4> Name:{name}</h4>
            <h5> email:{email}</h5>
        </div>
    );
};

export default User;