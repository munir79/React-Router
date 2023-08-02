import React from 'react';
import { Link } from 'react-router-dom';


const PostDetails = (props) => {
   const {id,title}=props.post;
    return (
        <div className='post'>
           <h1>Id:{id} </h1>
           <h4>Title:{title} </h4>
           <Link to={`/post/${id}`}> see details</Link>
           
        </div>
    );
};

export default PostDetails;