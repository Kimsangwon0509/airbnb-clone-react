import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core";//아바타 속성의 모든것을 가져오는 컴포넌트?


export default function Header(){
    return (
        <div className='header'>
            <img 
                className="header__icon" 
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
                alt=""></img>
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className='header__right'>
                <p>호스트가되세요</p>
                <LanguageIcon></LanguageIcon>
                <ExpandMoreIcon></ExpandMoreIcon>
                <Avatar></Avatar>
            </div>
        </div>
    )
}

