import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";


const Mobile = () => {
  return (
    <div>
      <nav class="mobile__Items">
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
    </div>
  );
};

export default Mobile;
