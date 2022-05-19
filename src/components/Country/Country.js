import React from 'react';
import './Country.css'

const Country = (props) => {
    return ( <
        div className = 'country' >
        <
        img src = { props.img }
        alt = "country flag image" / >
        <
        h3 > Country name: { props.name } < /h3> <
        p >
        Population: { props.populatiom } < br / >
        Area: { props.area } <
        /p> <
        /div>
    );
};

export default Country;