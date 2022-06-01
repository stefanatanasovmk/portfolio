import React from "react";
import "./Skills.css"
import Typer from "./Typer";
import cssBig from "./images/icons8-css3-100.png"
import jsBig from "./images/icons8-javascript-100.png"
import muiBig from "./images/icons8-material-ui-100.png"
import mongoBig from "./images/icons8-mongodb-a-cross-platform-document-oriented-database-program-100.png"
import nodeBig from "./images/icons8-nodejs-100.png"
import reactBig from "./images/icons8-react-100.png"
const text = "I like working with these technologies..."
export default function Skills() {
     return (
          <div className="Skills" id="skills">
               <Typer text={text} />
               <div className="Icons">
                    <div>
                         <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src={jsBig} alt="Javascript logo" className="skillsIcon" /></a>
                    </div>
                    <div>
                         <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src={mongoBig} alt="MongoDB logo" className="skillsIcon" /></a>
                    </div>
                    <div>
                         <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src={nodeBig} alt="Node logo" className="skillsIcon" /></a>
                    </div>
                    <div>
                         <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src={reactBig} alt="React logo" className="skillsIcon" /></a>
                    </div>
                    <div>
                         <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer"><img src={cssBig} alt="CSS logo" className="skillsIcon" /></a>
                    </div>
                    <div>
                         <a href="https://mui.com/" target="_blank" rel="noreferrer"><img src={muiBig} alt="Material UI logo" className="skillsIcon" /></a>
                    </div>
               </div>
          </div>
     )
}