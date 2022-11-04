import React from 'react';
import "./Cover.css";
const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video' src="https://portafolio-bucket.s3.amazonaws.com/media/coverVideo.mp4" autoPlay loop muted />
      <h1>Randy Martin Renteria Dorantes</h1>
      <p>Desarrollador Full Stack / JavaScript / Spring boot / NodeJS / React </p>
    </div>
  )
}

export default Cover
