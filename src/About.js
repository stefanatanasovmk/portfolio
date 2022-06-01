import React from "react";
import "./About.css"
import photo from "./images/AtanasovPhoto.png"
import Typer from "./Typer";
const text = "Hey, my name is Stefan Atanasov, I'm a Web Developer...and I also like frozen smoothies...and this font."
export default function About() {

     return (
          <div className="About" id="about">
               <div className="AboutText">
                    <Typer text={text} />
               </div>
               <div className="AboutPicture">
                    <img src={photo} className="Photo" alt="Stefan Atanasov" />
               </div>
          </div>
     )
}