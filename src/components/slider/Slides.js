import React from "react";
import capacitacion from "../../media/projects/capacitacion/capacitacion1.jpg";
import mergaservicio from "../../media/projects/megaservicio/megaservicio1.jpg";
import educativo from "../../media/projects/educativo/educacio4.jpg";

const slidesInfo = [
    {
        src: capacitacion,
        alt: "Project 1",
        desc: "Capacitacion-soft" ,

    },
    {
        src:mergaservicio,
        alt: "Project 2",
        desc: "Sistema Minube" 
    },
    {
        src:educativo,
        alt: "Project 3",
        desc: "Sistema Educativo TEC05" 
    }
]

const slides = slidesInfo.map(slide =>(
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span> 
        </div>
     
    </div>
))



export default slides;