import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video' src={coverVideo} autoPlay loop muted />
      <h1>Randy Martin Renteria Dorantes</h1>
      <p>Desarrollador Full Stack / JavaScript / Spring boot / NodeJS / React </p>
    </div>
  )
}

export default Cover
