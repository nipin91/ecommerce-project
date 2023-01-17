import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom'
const userPlaceholder = require('../../assets/user-placeholder.png');
const favoriteIcon = require('../../assets/favorite-icon.png');

const UserCard = (props) => {
    const [showMore, setShowMore] = React.useState(false);
    return <div className='user-details-card'>
        <img src={userPlaceholder} alt="" className='user-image' />
        <img src={favoriteIcon} alt="" className='favorite-icon' onClick={props.onSaveAsFav} />

        <div className='title-container'>
            <p className='title'>{props.title}</p> <span onClick={() => setShowMore(!showMore)}>show {showMore ? 'less' : 'more'}</span>
        </div>
        {showMore && <p className='body'>{props.body}</p>}
        <Link  className='btn-get-post' to={`/comment-details/${props.id}`}>Read Comments</Link>
    </div>
}


export default UserCard;