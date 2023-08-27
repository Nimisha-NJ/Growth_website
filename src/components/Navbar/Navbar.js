import React from "react";
import "./Navbar.css";
import logo from "../../assets/Growthcx.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="image">
        <img src={logo} alt="img" className="logo" />
      </div>
      <ul className="nav-links">
        <Link to={"/WhyUs"} style={{ textDecoration: "none", color: "black" }}>
          Why us?
        </Link>
        <Link
          to={"/OurFixes"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <span className="yourpain">Your pains</span> <br />
          Our fixes
        </Link>
        <Link to={"/Growth"} style={{ textDecoration: "none", color: "black" }}>
          Growth
        </Link>
        <Link
          to={"/EyeOpeners"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Eye-openers
        </Link>
        <Link
          to={"/Customers"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Customers
        </Link>
        <Link to={"/call"}>
          <button className="button">Hop on a call</button>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
