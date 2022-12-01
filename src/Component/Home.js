import React from "react";
import apple from "../images/Group 68.svg";
import google from "../images/Group 69.svg";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import Main from '../Component/Main'
import Sect from './Sect'
import Footer from '../Component/Footer'
import Widget from "./Widget";
import Review from "./Review";
const Header = () => {
  return (
    <div>
      <div className="hero">
        <h1>Buy, sell and manage your Crypto on TradeExpress.</h1>
        <p>
          Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.
        </p>

        <Link to="/Getstarted">
          <button> Get started </button>
        </Link>
        <div>
          <a href="https://apps.apple.com" target='_blank'><img src={apple} alt="" /></a>
          <a href="https://play.google.com/" target= '_blank'><img src={google} alt="" /></a>
          
        </div>
      </div>
      <Widget/>
      <Main/>
      <Sect/>
      <Review/>
      <Footer/>
    </div>
  );
};

export default Header;
