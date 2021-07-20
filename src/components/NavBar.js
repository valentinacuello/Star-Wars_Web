import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/star-wars-logo.png';
import {List} from "react-bootstrap-icons";
import "../../src/scss/components/navbar.scss"

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const btnClicked = () =>{
    setIsClicked(!isClicked)
  }
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={Logo}></img>
        </Link>
        <div className="burger-menu">
          <List/>
        </div>
        <ul className="nav-items">
          <li>
            Personajes
          </li>
          <li>
            Planetas
          </li>
          <li>
            Iniciar Sesión
          </li>
        </ul>
      </div>
         
    </nav>
  )
}

export default NavBar;

