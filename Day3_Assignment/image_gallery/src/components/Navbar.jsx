import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEnvelope, faHouseChimney, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  return (
    <div className="navbar" id="myNavbar">
        <a href='#home'><FontAwesomeIcon icon={faHouseChimney} /> Home</a>
        <a href='#gallery'><FontAwesomeIcon icon={faPhotoFilm} /> Gallery</a>
        <a href='#contact'><FontAwesomeIcon icon={faEnvelope}/> Contact</a>
        <a href='#about'><FontAwesomeIcon icon={faCircleInfo}/> About</a>
        <a href="#" style={{fontSize:"15px"}} className="icon" onClick={myFunction}>&#9776;</a>
        
    </div>
  )
}
