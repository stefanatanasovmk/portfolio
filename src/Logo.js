import React from "react";
import logo from "./images/AtanasovLogo.png"

//This component is styled in NavBar.css
export default function Logo() {
     return (
          <div className="LogoDiv">
               <img src={logo} alt="logo" className="Logo" />
          </div>
     )
}