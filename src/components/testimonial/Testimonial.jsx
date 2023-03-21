import React from 'react'
import AVTR1 from '../../assets/angel.jpg'
import AVTR2 from '../../assets/diego.jpg'
import AVTR3 from '../../assets/carlos.jpg'
import AVTR4 from '../../assets/peter.jpg'
import './testimonial.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const reference = [
  {
    id: 1,
    image: AVTR1,
    name: 'Angel Uray',
    comment: 'Robin is the most excellent Software developer I have ever met, he proved his commitment, determination, and willingness to contribute to teamwork when we worked together. He is always challenging himself over and over again. His attention to detail, good communication, research skills, and technical knowledge was evident, and the key to successfully finishing all the projects with our team in record time...'
  },
  {
    id: 2,
    image: AVTR2,
    name: 'Diego Hernandez',
    comment: 'I can certify that Robin work has the following capabilities: -Continuously learn and stay up-to-date with the latest technologies and industry trends. -Write clean, efficient, and well-documented code. -Collaborate effectively with cross-functional teams, including designers, product managers, and stakeholders. -Be an excellent problem solver and have a strong attention to detail.'
  },
  {
    id: 3,
    image: AVTR3,
    name: 'Carlos Molina',
    comment: 'Robin is an extremely kind, collaborative and hard-working person. In addition, his technical level is surpassed day by day due to his strong will to learn, his great dedication and his innate talent. I had the privilege of being his programming partner for a whole week and teammate for a long time. I am sure that he will be a great team member during his professional life as a web developer !.'
  },
  {
    id: 4,
    image: AVTR4,
    name: 'Peter Beshara',
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, possimus harum praesentium molestias nemo beatae quisquam, qui, atque incidunt alias debitis explicabo distinctio dolorem iste sapiente repudiandae. Aperiam, quaerat ex?'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
    <div className='testimonial__title'>
      <h5>Review from references</h5>
      <h2>Testimonials</h2>
    </div>

    <Swiper className='container testimonials__container'
    // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        reference.map(({id, image, name, comment}) => {
          return (
            <SwiperSlide key={id} className='testimonial__item'>
              <div className='testimonial__item-image'>
                <img src={image} alt={name} />
              </div>
              <h4>{name}</h4>
              <p className='testimonial__item-comment'>{comment}</p>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default Testimonial