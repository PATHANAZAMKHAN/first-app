import React from "react";
import logo from "../Images/logo192.png";

export default function Navbar(){
    return(
      <nav>
        <img src={logo} alt='Error loading' className='logo'></img>
        <p>ReactFacts</p>
        <p></p>
      </nav>
    )
  }
  
