import React from 'react';
import './style.scss'


const CommentCard = (props) => {
    return <div className='comment-card'>
        <p>Name:{props.name} </p>
        <p>Email: {props.email}</p>
        <p>{props.body}</p>
    </div>;
}


export default CommentCard;