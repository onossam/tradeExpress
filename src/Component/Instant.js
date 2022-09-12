import React from 'react'
import { Link } from "react-router-dom";
import '../Styles/Instant.css'
const Instant = () => {
  return (
    <div className='instant-sect'>
      <button className="buy-btn1">
        <Link to="/Buy"> Buy</Link>
      </button>
      <button className="buy-btn1">
        <Link to="/Sell"> Sell</Link>
      </button>
    </div>
  )
}

export default Instant