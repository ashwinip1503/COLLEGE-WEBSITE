import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src= {play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY </h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p> Our diverse range of academic programs, cutting-edge facilities, and dedicated faculty ensure that every student receives a holistic education that prepares them for success in their chosen fields. </p>
            <p>In addition to our rigorous academic offerings, we pride ourselves on a dynamic campus life that fosters personal growth and community engagement. Students can immerse themselves in a wide variety of extracurricular activities</p>
            <p>We are dedicated to creating an environment where students from all backgrounds can thrive. Our commitment to diversity and inclusion ensures that every member of our community feels valued and supported. </p>
        </div>
    </div>
  )
}

export default About