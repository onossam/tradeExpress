import React from "react";
import payment from "../images/crypto copy.jpeg";
import freedom from "../images/freedom.jpeg";
import investment from "../images/investment.jpg";
import account from "../images/create account.jpeg";
import deposit from "../images/deposit.jpeg";
import crypto from "../images/buy:sell.jpeg";
import "../Styles/Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="landing-page">
      <h2>Why do people get involved with Cryptocurrencies?</h2>
      <div className="main-sect">
        <div className="row-gap ">
          <img src={payment} alt="" />
          <h4>Easy Mode of Payment</h4>
          <p>
            People can now easily send and receive money from anywhere in the
            world to purchase goods and pay for services.
          </p>
        </div>
        <div className="row-gap">
          <img src={freedom} alt="" />
          <h4>Financial Freedom</h4>
          <p>
            Just like the internet, no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>
        <div className="row-gap">
          <img src={investment} alt="" />
          <h4>Investment</h4>
          <p>
            The constant demand as made Cryptocurrencies a Digital Gold used for
            alternatives store of wealth on long term investments.
          </p>
        </div>
      </div>
      <Link to="/learn">
        <button className="btn-hero"> Learn</button>
      </Link>

      <h2>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
      <div className="main-sect2">
        <div className="main-row main-flex1">
          <div>
          <h4>
            <span id="main-num">1</span> Create a free Account
          </h4>
          <p>
            Sign up for your free TradExpress Wallet on web, IOS, or Andriod
            devices and follow our easy process to set up your profile.
          </p>
          </div>
         
          <img src={account} alt="" />
        </div>

        <div className="main-row main-flex2">
          <div>
          <h4>
            <span id="main-num">2</span> Deposit
          </h4>
          <p>
            Choose your preferred option like bank transfer, credit/debit card
            or send digital assets directly to your wallet for easy
            funding/withdrawal
          </p>
          </div>
         
          <img src={deposit} alt="" />
        </div>

        <div className="main-row main-flex1">
          <div>
          <h4>
            <span id="main-num">3</span> Buy/Sell Crypto
          </h4>
          <p>
            Buy BTC, USTD, ETH, XRP, LTC, DOGE and securely store it in your
            wallet or send it easily to friends and family.
          </p>
          </div>
         

          <img src={crypto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
