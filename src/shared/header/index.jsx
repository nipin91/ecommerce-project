import React from 'react';
import './style.scss';
import useBearStore from '../../hooks/useFavorite'
const favoriteIcon = require('../../assets/favorite-icon.png');

const Header = () => {
    const { count } = useBearStore((state) => state);
    return <header className='header'>
        <div className='fav-indicator'>
            <img src={favoriteIcon} alt="" className='favorite-icon'/>
            <span>{count}</span>
        </div>
    </header>
}


export default Header;