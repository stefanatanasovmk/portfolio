import React from "react";
import "./Work.css"
import Typer from "./Typer";
import invoiceMkImage from "./images/invoice.mk.png"
const text = "My work so far..."
export default function Work() {
     return (
          <div id="work" className="Work">
               <Typer text={text} />
               <div className="Projects">
                    <div className="Project">
                         <a href="https://www.invoice.mk/" target="_blank" rel="noreferrer"><img src={invoiceMkImage} alt="Invoice.mk project" className="Image" /></a>
                         <p className="ProjectText"><b>Invoice.mk</b>
                              - free to use service for generating invoices for small businesses in Macedonia.</p>
                    </div>
               </div>
          </div>

     )
}