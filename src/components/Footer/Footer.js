import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="para">
        We're bandits and hackers. We do whatever it takes for growth!
      </span>{" "}
      <br />
      <button className="button2">Hop on a call</button>
      <div></div>
      &copy; Copyright {new Date().getFullYear()} Growth.cx
    </footer>
  );
}

export default Footer;
