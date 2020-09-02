import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

export default function Header(){
    return (
        <div className='header'>
            <h1>Header Components</h1>
            <img 
                className="header__icon" 
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
                alt=""></img>
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
        </div>
    )
}

