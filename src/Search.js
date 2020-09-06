import React, { useState } from 'react';
import './Search.css';
// import { DateRangePicker } from "react-date-range";
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file

// DATE PICKER COMPONENT
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