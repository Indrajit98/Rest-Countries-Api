import React from "react";
import { Link } from "react-router-dom";
import './Country.css'


const Country = (props) => {

    //  console.log(props);

    const { name, flags } = props.country;
    return (
        <div className="country">
      <div>
        <img src={flags.png} alt="" />
        <h3>country: {name.common}</h3>
        <Link to={`country/${name.common}`}><button>Country Details</button></Link>
      </div>
    </div>
    );
};

export default Country;