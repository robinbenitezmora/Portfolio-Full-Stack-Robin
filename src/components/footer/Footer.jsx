import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ROBIN</a>

      <ul className='list'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimmonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/robin.benitez.140/" target="_blank"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank"><FiInstagram /></a>
        <a href="https://twitter.com/MecanicoRobin" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className='footer__notes'>
        <small>&copy; ROBIN Works. All right reserved</small>        
      </div>
    </footer>
  )
}

export default Footer
