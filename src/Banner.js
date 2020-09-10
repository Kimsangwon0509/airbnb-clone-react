import React, { useState } from 'react';
import './Banner.css';
import {Button} from "@material-ui/core";
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory();
    const[showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch &&<Search />}

                <Button onClick={() =>
                setShowSearch(!showSearch)}
                className='banner__searchButton' 
                variant='outlined'>
                    {showSearch
                    ?"Hide" : 
                    "Search the Dates"}
                </Button>
            </div>
            <div className='banner__info'> 
                <h1>이제, 여행은 가까운 곳에서.</h1>
                <h5>가까운 곳의 숨겨진 아름다움을 발견하는 색다른 휴가를 즐겨보세요. </h5>
                <Button
                onClick={() => history.push('/search')}
                variant='outlined'>가까운 여행지 둘러보기</Button>
            </div>
        </div>
    );
}

export default Banner;