import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Buy.css'

const Buy = () => {
  return (
    <div className="buy-hero">
      <div>
      <h2>Buy/Sell Instantly</h2>
      <button className="buy-btn1">
        <Link to="/Buy"> Buy</Link>
      </button>
      <button className="buy-btn1">
        <Link to="/Sell"> Sell</Link>
      </button>

      <h3>Coin to Buy</h3>

        <form action="">
          <label For="bitcoin">
        
            <h5>Select Cryptocurrency</h5></label>
          <select  name="" id="">
            <option  value="">Bitcoin (BTC)</option>
            <option value="">Ethereum (ETH)</option>
            <option value="">Tether (USDT)</option>
          </select>
        </form>
      

      <form action="">
        <label For="Currency"><h5>Select Currency</h5> </label>
        <select name="" id="">
            <option value="">Naira(NGN)</option>
            <option value="">Dollar(USD)</option>
            <option value="">Canadian(CAD)</option>
            <option value="">British Pound(GBP)</option>
        </select>
      </form>
      <h5>Amount</h5>
      <form>
        <div>
          <span>$</span><input type="text" placeholder="Enter Amount" />
        </div>
      </form>
      {/* <select name="NGN" id="">NGN</select> */}
      </div>
      
      <button className="buy-btn">Continue</button>
      
    </div>
  );
};

export default Buy;
