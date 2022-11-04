import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Randy Martin Renteria Dorantes</h1>
        <p>De la ciudad de Acapulco de juárez </p>
      </div>
      <div className="footer-contact">
        <h2>Contactame </h2>
        <h4>Num.Telefono: 7442856402</h4>
        <h4><a href="https://www.linkedin.com/in/randy-martin-renter%C3%ADa-dorantes-345474234">Visita mi perfil de LINKEDIN!</a></h4>
        <h4> <a href="https://github.com/Randy1117" >Visita mi perfil de GIT HUB!</a></h4>
        <p>Y pongámonos manos a la obra</p>

      </div>
      <div className="footer-sns">
        <div className="design-by">De todo ♡ Gracias por visitar mi portafolio 😄 </div>
        <div className="sns-links">
          <a href="linkedin.com/in/randy-martin-rentería-dorantes-345474234" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/Randy1117" target="_blank" rel="noreferrer">
            <i className="git gi-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;