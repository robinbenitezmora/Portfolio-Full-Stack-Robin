import React from 'react'
import HeaderSocial from './HeaderSocial'
import Resume from './Resume'
import ME from '../../assets/robin.jpg'
import './header.css'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Robin Benitez</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <Resume />
        <HeaderSocial />

        <div className='image'>
          <img src={ME} alt='me' className='me' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header