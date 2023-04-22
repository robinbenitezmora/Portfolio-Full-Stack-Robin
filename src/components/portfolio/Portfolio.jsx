import React from 'react'
import IMG1 from '../../assets/my_budget_app.jpg'
import IMG2 from '../../assets/crypto_coins.jpg'
import IMG3 from '../../assets/tv_series.jpg'
import IMG4 from '../../assets/weather.jpg'
import IMG5 from '../../assets/math_magician.jpg'
import IMG6 from '../../assets/barbershop.jpg'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My Budget App',
    github: 'https://github.com/robinbenitezmora/My-Budget-Manager',
    live: 'https://my-budget-manager-c423.onrender.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Coins',
    github: 'https://github.com/robinbenitezmora/crypto-coins',
    live: 'https://gregarious-pasca-272a68.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'TV Shows',
    github: 'https://github.com/robinbenitezmora/TV-Shows',
    live: 'https://gregarious-melba-45d9be.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Wheater App',
    github: 'https://github.com/robinbenitezmora/capstone3',
    live: 'https://moonlit-queijadas-da638a.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Calculator',
    github: 'https://github.com/robinbenitezmora/math-magician',
    live: 'https://63233fbe2d9fc6644776cddc--serene-rolypoly-6c9e95.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Alura Barbershop',
    github: 'https://github.com/robinbenitezmora/Barbershop',
    live: 'https://dazzling-gelato-a01006.netlify.app/'
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
