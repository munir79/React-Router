import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostDetails from './PostDetails';

const Post = () => {
   const post=useLoaderData();
    return (
        <div>
            <h3> total Post:{post.length} </h3>
            {
                post.map(post=><PostDetails key={post.id} post={post}></PostDetails>)
            }
        </div>
    );
};

export default Post;