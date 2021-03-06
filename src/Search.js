import React, { useState } from 'react';
import './Search.css';
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';

// DATE PICKER COMPONENT
// 이전에 date-fns 묘듈을 깔아야 함 .....module 불편하게 만듬...
//react-date-range 를 설치 해야 함
function Search(props) {
    const[startDate,
    setStartDate] = useState(new Date());
    const[endDate,
    setEndDate] = useState(new Date());
    const history =useHistory();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
           <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}
           />
           <h2>
              Number of guests
              <PeopleIcon />
           </h2>
           <input 
              min={0}
              defaultValue={2}
              type="number" />
            <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
        </div>
    );
}

export default Search;