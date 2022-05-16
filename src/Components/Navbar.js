import React from "react";
import logo from "../Images/logo192.png";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt='Error loading' className='logo'></img>
      <h2>ReactFacts</h2>
      <h3>React Course - Project 1</h3>
    </nav>
  )
}

