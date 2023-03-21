import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio1 Title',
    github: 'https://github.com',
    live: 'https://dribbble.com/Allien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio2 Title',
    github: 'https://github.com',
    live: 'https://dribbble.com/Allien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio3 Title',
    github: 'https://github.com',
    live: 'https://dribbble.com/Allien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio4 Title',
    github: 'https://github.com',
    live: 'https://dribbble.com/Allien_pixels'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio5 Title',
    github: 'https://github.com',
    live: 'https://dribbble.com/Allien_pixels'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio6 Title',
    github: 'https://github.com',
    live: 'https://dribbble.com/Allien_pixels'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio__title'>
        <h5>My Recent Works</h5>
        <h2>My Portfolio</h2>
      </div>

      <div className='container portfolio__container'>
      {
        data.map(({id, image, title, github, live}) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-resume'>
                <a href={github} className='btn'>GitHub</a>
                <a href={live} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
