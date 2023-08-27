import React from "react";
import "./style.css";

function Call() {
  return (
    <div className="sign-up-card">
      <form>
        <h1>To a good time.</h1>

        <label htmlFor="">Name</label>
        <input type="text" name="firstname"></input>

        <label htmlFor="">Last Name</label>
        <input type="text" name="lastname"></input>

        <label htmlFor="">Email</label>
        <input type="email" name="email"></input>

        <label htmlFor="">Password</label>
        <input type="password" name="password"></input>

        <button>Hop on a Call</button>
      </form>
    </div>
  );
}

export default Call;
