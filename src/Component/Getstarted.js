import React from 'react'

import { Link } from "react-router-dom";
import '../Styles/Getstarted.css'

const Getstarted = () => {
  return (
    <div className='getstarted-sect'>
       <button className="individual-btn1">
            
            <Link to="/Individual"> Individual </Link>
          </button>
          <button className="individual-btn1">
            
            <Link to="/Business">Business </Link>
          </button>
     
    </div>
  )
}

export default Getstarted