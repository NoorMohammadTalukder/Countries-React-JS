import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    return ( <
        div >

        <
        LoadCountries > < /LoadCountries>  <
        /div>
    );
};

function LoadCountries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            // .then(data=>console.log(data))
            .then(data => setCountries(data))
    }, [])
    return ( <
        div >
        <
        h1 > All Counties Of the World... < /h1>  <
        h2 > Total Countries: { countries.length } < /h2>  <
        div className = 'countries-container' > {
            countries.map(country =>
                <
                Country name = { country.name.common }
                population = { country.population }
                area = { country.area }
                img = { country.coatOfArms.png }
                key = { country.cca3 } >

                <
                /Country>)
            } <
            /div> <
            /div>
        )
    }
    export default Countries;