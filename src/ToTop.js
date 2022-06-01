import React from "react";
import "./ToTop.css"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Link } from "react-scroll";
export default function ToTop() {

     return (
          <div className="ToTop">
               <Link to="navbar" spy={true} smooth={true} offset={0} duration={1000} >
                    <ArrowCircleUpIcon style={{ height: "30px", width: "30px", cursor: "pointer" }} />
               </Link>
          </div>
     )
}