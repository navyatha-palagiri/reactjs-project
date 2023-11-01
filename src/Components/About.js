import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = (props) => {
    console.log(props,"props");
  return (
    <div className={props && props.cssstyling =="unique" ? "about-unique" : "about-section-container"}>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=""/>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt=""/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'> Food Is An Important Part Of A Balanced Diet</h1>
            <p className='primary text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error ab labore aliquid.</p>
            <p className='primary-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat unde doloremque beatae sit! Eos aut suscipit, possimus, quia nemo nesciunt velit corporis totam numquam quam itaque vel facere! Doloremque, asperiores?</p>
            <div className='about-buttons-container'>
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'><BsFillPlayCircleFill/>watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About