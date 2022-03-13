import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Home.css'

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const Countries = country.slice(0, 100);

  return (
    <div>
      <h2>Country : {Countries.length}</h2>
      <div className="homeCountry">
        {Countries.map((country) => (
          <Country country={country} key={country.cca2}></Country>
        ))}
      </div>
    </div>
  );
};

export default Home;
