import React, {useState} from 'react';
import Logo from '../img/star-wars-logo.png';
import {List} from "react-bootstrap-icons";
import "../../src/scss/components/navbar.scss"

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const btnClicked = () =>{
    setIsClicked(!isClicked)
  }
  
  return (
    <div className="nav-bar-container">
      <div className="nav-content">
        <div className="nav-items">
          <img src={Logo} className="logo"/>
          <div onClick={()=>{btnClicked()}}>
            <List className="burger-menu"/>
          </div>
        </div>
      </div>      
      <div className={"mobile-menu" + (isClicked ? " show" : "")}>
        <a>Personajes</a>
        <a>Planetas</a>
        <a>Iniciar sesión</a>
      </div>
    </div>

  )
}

export default NavBar;

