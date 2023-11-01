import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = (props) => {
    console.log(props,"props")
  return (
    <div className={props && props.cssstyling =="testimonial" ? "work-testimonial" : "work-section-wrapper"}>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'> What they are saying</h1>
            <p className='primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident nam esse inventore repellat molestiae doloribus</p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloremque architecto debitis molestias deserunt sit</p>
            <div className='testimonials-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonial