import React from 'react';
import Luke from '../img/Luke_Hero.png';
import Leia from '../img/Leia_Hero.png';
import "../../src/scss/views/home.scss";


const Home = () => {
    return (
        <div className="hero-container hero-bg">
            <div className="text-wrapper">
                <p>In a galaxy far, far away...</p>
                <h1>Guía visual con toda la información de tus personajes favoritos</h1>
            </div>            
            <button className="cta-home">Ir a la galería</button>
            <div className="hero-img">
                <img src={Luke} alt="Foto de Luke Skywalker." className="luke"/>
                <img src={Leia} alt="Foto de Leia Organa." className="leia"/>
            </div>
        </div>
    )
}

export default Home;
