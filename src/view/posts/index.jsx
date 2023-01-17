import React from 'react';
import { toast } from 'react-toastify';
import { getPosts } from '../../services/post.service';
import UserCard from '../../shared/user-card';
import useBearStore from '../../hooks/useFavorite'
import './style.scss';
const Posts = () => {

    const [posts, setPosts] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(0); // we can use the page number for the pagination

    const { increaseFavCount } = useBearStore((state) => state);

    React.useEffect(() => {
        getUserPosts(currentPage);
    }, [currentPage]);


    const getUserPosts = (currentPage) => {
        getPosts(currentPage).then(res => {
            const updatedPost = posts.length ? posts.concat(res) : res;
            setPosts(updatedPost);
        })
    }

    const onSaveAsFav = () => {
        toast('Item added in wishlist');
        increaseFavCount();
    }
    return (
        <div className='post-page-container'>
            <div className='detail-wrapper'>
                <div>
                    <h1 className='heading'>Post List</h1>
                    <ul className='user-post-list'>
                        {posts.length && posts.map((elem) => <li key={`user_id_${elem.id}`}>
                            <UserCard {...elem} onSaveAsFav={onSaveAsFav} />
                        </li>)}
                    </ul>
                    <button type='button' className='btn btn-get-more' onClick={() => setCurrentPage(currentPage + 1)}>Load more</button>
                </div>
            </div>
        </div>
    )
}

export default Posts