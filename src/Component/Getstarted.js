import React from 'react'

import { Link } from "react-router-dom";
import '../Styles/Getstarted.css'

const Getstarted = () => {
  return (
    <div className='getstarted-sect'>
      <h3>Let's get started</h3><br />

          <button className="individual-btn1">
             <Link to="/Individual"> Individual </Link>
          </button><br />

          <button className="individual-btn1">
            <Link to="/Business">Business </Link>
          </button>
     
    </div>
  )
}

export default Getstarted