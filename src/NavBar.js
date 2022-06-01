import React, { useState } from "react"
import logo from "./images/AtanasovLogo.png"
import "./NavBar.css"
import { Popover } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-scroll"

export default function NavBar() {
     const [anchorEl, setAnchorEl] = useState(null)
     function handleOpen(e) {
          setAnchorEl(e.currentTarget)
     }
     function handleClose() {
          setAnchorEl(null)
     }
     const open = Boolean(anchorEl)
     const id = open ? 'simple-popover' : undefined;

     return (
          <div id="navbar" className="NavBar">
               <div className="HamburgerMenu">
                    <MenuIcon aria-describedby={id} onClick={handleOpen} />
                    <Popover
                         id={id}
                         anchorEl={anchorEl}
                         onClick={handleClose}
                         open={open}
                         onClose={handleClose}
                         anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                         }}
                    >
                         <div className="DropDownLinks">
                              <Link className='NavBarLinks' to="about" spy={true} smooth={true} offset={0} duration={1000} onClick={handleClose} ><PersonIcon />0.1 About</Link>
                              <Link className='NavBarLinks' to="skills" spy={true} smooth={true} offset={0} duration={1000} onClick={handleClose} ><SportsMartialArtsIcon />0.2 Skills</Link>
                              <Link className='NavBarLinks' to="work" spy={true} smooth={true} offset={0} duration={1000} onClick={handleClose} ><WorkspacePremiumIcon />0.3 Work</Link>
                              <Link className='NavBarLinks' to="contact" spy={true} smooth={true} offset={0} duration={1000} onClick={handleClose} ><MailIcon />0.4 Contact</Link>
                         </div>
                    </Popover>
               </div >
               <div className="Links">
                    <Link className='NavBarLinks' to="about" spy={true} smooth={true} offset={0} duration={1000} >0.1 About | </Link>
                    <Link className='NavBarLinks' to="skills" spy={true} smooth={true} offset={0} duration={1000} > 0.2 Skills | </Link>
                    <Link className='NavBarLinks' to="work" spy={true} smooth={true} offset={0} duration={1000} > 0.3 Work | </Link>
                    <Link className='NavBarLinks' to="contact" spy={true} smooth={true} offset={0} duration={1000} > 0.4 Contact</Link>
               </div>
               <div className="LogoDiv">
                    <div className="box">
                         <img src={logo} alt="logo" className="Logo" />
                    </div>
               </div>
               <div className="Empty"></div>
               <div className="Profiles">
                    <a href="https://www.linkedin.com/in/stefan-atanasov-a2b824116/" target="_blank" rel="noreferrer"><LinkedInIcon className="LinkedInIcon" /></a>
                    <a href="https://github.com/stefanatanasovmk" target="_blank" rel="noreferrer"><GitHubIcon className="GitHubIcon" /></a>
               </div>
          </div >
     )
}