import React from "react";
import Typer from "./Typer";
import "./Contact.css"
const text = `If you want to contact me, write me on my email: atanasovstefan@hotmail.com`

export default function Contact() {
     return (
          <div id="contact" className="Contact">
               <Typer text={text} />
          </div>
     )
}