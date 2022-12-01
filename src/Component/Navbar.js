import React, { useState } from "react";
import "../Styles/Navbar.css";
import img from "../images/TradExpress.svg";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

import Mobile from "./Mobile";

const Navbar = () => {
  const [state, setState] = useState(false);
  const hamburgerIcon = <FaBars size="30px" color="white" onClick={() => setState(!state)}   /> 

  const closeIcon = <FaTimes size="30px" color="white" onClick={() => setState(!state)} />


  return (
    <div class="Navbar">
      <div class="Navbar__Link Navbar__Link-brand">
        <Link to="/">
          <img src={img} alt="" />
        </Link>
      </div>
      <div class="Navbar__Link Navbar__Link-toggle">
      {state ? closeIcon : hamburgerIcon}
      </div>
    
     
      {/* <div class="Navbar__Link Navbar__Link-toggle">
        <FaBars size="20px" color="white" onClick={() => setState(!state)}   /> 
        <FaTimes
              size="20px"
              color="white"
              onClick={() => setState(state)}
            />
      </div> */}

      <nav class="Navbar__Items">
        <div class="Navbar__Link">
          <Link className="nav-items" to="/instant">
            Instant Buy/Sell
          </Link>
        </div>
        <div class="Navbar__Link">
          <Link className="nav-items" to="/learn">
            Learn
          </Link>
        </div>
        <div class="Navbar__Link">
          <Link className="nav-items " to="/login">
            <button className="nav-items-right">Login</button>
          </Link>
        </div>
        <div class="Navbar__Link">
          <Link className="nav-items nav-item-left" to="/getstarted">
            <button className="nav-items-left">Get Started</button>{" "}
          </Link>
        </div>
        </nav>
        
        {state && (
          <div>
             <Mobile />
            
           
          </div>
        )}
      
    </div>
  );
};

export default Navbar;
