import React from "react";
import "./Technologies.css";
import Javascript from "../../media/icons/backend/javascript.gif";
import Reactjs from "../../media/icons/frontend/react.gif";

//import {frontEnd, backEnd, diseño} from '../props.js';
const Info = () => {
  return (
    <div className="info-container">
    <div className="info">
      <h1>Mis habilidades</h1>
      <div className="info">
      <div className="container-image">
        <img src="https://res.cloudinary.com/techstore/image/upload/v1619409801/Marcos/Portfolio/html-5_cnx89x.svg" 
        alt="" className="cntimg"/>
        <img src="https://res.cloudinary.com/techstore/image/upload/v1619410115/Marcos/Portfolio/css-3_dqfurt.svg" 
        alt="" className="cntimg"/>
       <img src={Reactjs}
        alt="" className="cntimg"/>
            <img src="https://res.cloudinary.com/techstore/image/upload/v1619411069/Marcos/Portfolio/bootstrap-4_od87ai.svg" 
        alt="" className="cntimg"/>
      
      </div>
    </div>
    <div className="info">
       <div className="container-image">
        <img src={Javascript}
        alt="" className="cntimg"/>
            <img src="https://res.cloudinary.com/techstore/image/upload/v1619411265/Marcos/Portfolio/nodejs-icon_tvibvs.svg" 
        alt="" className="cntimg"/>
        <img src="https://res.cloudinary.com/techstore/image/upload/v1619411709/Marcos/Portfolio/sequelize_zrwxu8.svg" 
        alt="" className="cntimg"/>
            <img src="https://www.icone-png.com/png/53/53389.png" 
        alt="" className="cntimg"/>
        </div>
    </div>

  
        
    </div>


     
      
  </div>
  );
};

export default Info;