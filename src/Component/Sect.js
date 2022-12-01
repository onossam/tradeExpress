import React from 'react'
import apple from "../images/Group 68 copy.svg";
import google from "../images/Group 69 copy.svg";
import '../Styles/Sect.css'
import { Link } from "react-router-dom";

const Sect = () => {
  return (
    <div className='sect-row'>
        <p>
            Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
        </p>
        <h2>
            Create your account for free and start trading today!
        </h2>
        <Link to="/Getstarted">
          <button> Get started </button>
        </Link>
        <div>
          <a href="https://apps.apple.com" target='_blank'><img src={apple} alt="" /></a>
          <a href="https://play.google.com/" target= '_blank'><img src={google} alt="" /></a>
            
        </div>
    </div>
  )
}

export default Sect