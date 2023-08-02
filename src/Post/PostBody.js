import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostBody = () => {
    const body=useLoaderData();
    return (
        <div>
            <h3> all Post Information </h3>
            <h4> {body.body}</h4>

        </div>
    );
};

export default PostBody;