import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>My Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project1' />
          </div>
          <h3>Portfolio Title</h3>
          <div className='portfolio__item-resume'>
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Allien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project1' />
          </div>
          <h3>Portfolio Title</h3>
          <div className='portfolio__item-resume'>
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Allien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project1' />
          </div>
          <h3>Portfolio Title</h3>
          <div className='portfolio__item-resume'>
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Allien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
