import React from 'react'
import { Link } from "react-router-dom";
import '../Styles/Sell.css'

const Sell = () => {
  return (
    <div className='sell-hero'>
        <h2>Buy/Sell Instantly</h2>
      <button className='sell-btn1'>
        <Link to="/Buy"> Buy</Link>
      </button>
      <button className='sell-btn1'>
        
        <Link to="/Sell"> Sell</Link>
      </button>
      <h3>Coin to Sell</h3>

        <form action="">
          <label For="bitcoin">
        
            <h5>Select Cryptocurrency</h5></label>
          <select name="" id="">
            <option value="">Bitcoin (BTC)</option>
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
      <h5>Quantity</h5>
      <select name="NGN" id="">NGN</select>
      <button className='sell-btn'>Continue</button>
    </div>
  )
}

export default Sell