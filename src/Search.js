import React, { useState } from 'react';
import './Search.css';
 import { DateRangePicker } from "react-date-range";
//  import 'react-date-range/dist/styles.css'; // main style file
//  import 'react-date-range/dist/theme/default.css'; // theme css file

// DATE PICKER COMPONENT
// 이전에 date-fns 묘듈을 깔아야 함 .....module 불편하게 만듬...
// npm i react-date-range 를 설치 해야 함
function Search(props) {
    const[startDate,
    setStartDate] = useState(new Date());
    const[endDate,
    setEndDate] = useState(new Date());
    
    return (
        <div className='search'>
           
        </div>
    );
}

export default Search;