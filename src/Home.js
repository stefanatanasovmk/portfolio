import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact"
import Footer from "./Footer";
import Logo from "./Logo"
export default function Home() {
     return (
          <div className="Home" style={{ width: "100%", height: "100%" }}>
               <Logo />
               <NavBar />
               <About />
               <Skills />
               <Work />
               <Contact />
               <Footer />
          </div>
     )
}