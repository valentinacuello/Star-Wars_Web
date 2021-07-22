import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/star-wars-logo.png';
import { CSSTransitionGroup } from 'react-transition-group' 
import { List } from "react-bootstrap-icons";
import  Menu  from './Menu'
import "../../scss/components/navbar.scss"
const NavBar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const btnClicked = () => {
        setIsClicked(!isClicked)
    }


    const menuList = Menu.map(({name, url}, index)=>{
        return (
            <li key={index}>
                <Link to={url}>{name}</Link>
            </li>
        );
    });

    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src={Logo}></img>
                </Link>
                <button className="burger-menu" onClick={()=>{btnClicked()}}>
                    <List />
                </button>
                <ul className={"nav-items" + (isClicked !== false ? " items-show" : "")}>
                    {menuList}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
