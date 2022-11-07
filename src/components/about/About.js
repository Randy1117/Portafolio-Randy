import React from "react";
import "./About.css";
import mifoto from "../../media/mifoto.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Dejame decirte algo sobre mi</h3>
        <p>Soy un desarrollador web egresado del Instituto Tecnológico de Acapulco, 
            dedicado al desarrollo de sistemas y aplicaciones web. 
            He participado en varios proyectos tanto para mi universidad, como en proyectos personales. En el año 2019 gane el concurso ENEIT en la categoria
            de software con mi proyecto llamado "Capacitacion-Soft" el cual tambien fue el proyecto con el que me titule en la carrea de ingenieria en sistemas computacionales,
            estoy preparado para apoyar a crear soluciones con mis conocimientos e ir aumentando mi experiencia 
            con nuevos retos.</p>
            <h4> <a href="https://drive.google.com/file/d/1vruVxcSbimYUM3Bls1z-cqAvG7OCr-8b/view?usp=sharing" >Visita mi CV!</a></h4>
      </div>
      <div className="about-img">
        <img src={mifoto} 
            alt="about"/>
      </div>
    </div>
  )
}

export default About
