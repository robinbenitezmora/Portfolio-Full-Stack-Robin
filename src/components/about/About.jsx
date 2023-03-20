import React from 'react'
import ME from '../../assets/robin_2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <div className='about__title'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      </div>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='My image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__card-icon' />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__card-icon' />
              <h5>Projects</h5>
              <small>50+ Designed</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__card-icon' />
              <h5>Happy Clients</h5>
              <small>50+ Satisfied</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste id tempora in ex aspernatur sed asperiores. Dolorum aliquid autem quisquam labore, laudantium consequuntur similique amet consectetur debitis neque. Esse.</p>
          <a href="#contact" className='btn btn-primary'>Let's to Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About