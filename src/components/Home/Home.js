import React from "react";
import Chat from "../Chat/Chat";
import "./Home.css";

function Home() {
  return (
    <div className="main_container">
      <p className="para1">
        Somebody told us sharing customer testimonials adds credibility.{" "}
      </p>
      <p className="para2">So sharing some of them for the sake of it!</p>
      <p className="para3">A few of our happy customers</p>
      <Chat />
    </div>
  );
}

export default Home;
