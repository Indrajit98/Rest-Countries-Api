import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css'

const CountryDetails = (props) => {
    const {countryName} = useParams();
    const [countryDe, setCountryDe] = useState([])
    const {population, region, subregion,area,capital,continents}=countryDe;
   
    useEffect(() =>{
        const url=(`https://restcountries.com/v3.1/name/${countryName}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setCountryDe(data[0]))
        
    },[])

    // console.log(countryDe)

    return (
        <div className="countryDetails">
            <h3>Country Name: {countryName}</h3>
            <p>Population :{population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p>Subregion: {subregion}</p>
            <p>Capital: {capital}</p>
            <p>Continents: {continents}</p>
        </div>
    );
};

export default CountryDetails;