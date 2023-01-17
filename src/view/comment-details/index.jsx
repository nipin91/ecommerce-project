import React from 'react';
import { useParams } from "react-router-dom";
import { getCommentsByPostId } from '../../services/post.service';
import CommentCard from '../../shared/comment-card';
import './style.scss'

const CommentDetails = () => {
    const [comments, setComments] = React.useState([]);
    const { id } = useParams();

    React.useEffect(() => {
        if (id) {
            getCommentDetailsById(id);
        }
    }, [id]);

    const getCommentDetailsById = (id) => {
        getCommentsByPostId(id).then((res => {
            setComments(res);
        }))
    }
    return (
        <div className='comment-page-container'>
            <div className='detail-wrapper'>
                <h1 className='heading'>Comment Details</h1>
                <ul className='post-comment-list'>
                    {comments.length && comments.map((elem, index) => <li><CommentCard {...elem}/></li>)}
                </ul>
            </div>
        </div>
    )
}

export default CommentDetails