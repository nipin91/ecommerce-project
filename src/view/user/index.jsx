import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss';
import {getUsers} from '../../services/user.service'

const User = () => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = () => {
        getUsers().then(res => {
            setUser(res);
        })
    }
    return (
        <div className='user-page-container'>
            <div className='detail-wrapper'>
                <h1 className='heading'>Welcome</h1>
                <p className='user-name'>{user?.name}</p>
                <Link  className='btn btn-get-post' to='posts'>Get Posts</Link>
            </div>
        </div>
    )
}

export default User