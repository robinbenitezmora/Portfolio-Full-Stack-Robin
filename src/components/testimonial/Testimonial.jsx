import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
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
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, possimus harum praesentium molestias nemo beatae quisquam, qui, atque incidunt alias debitis explicabo distinctio dolorem iste sapiente repudiandae. Aperiam, quaerat ex?'
  },
  {
    id: 2,
    image: AVTR2,
    name: 'Angel Uray',
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, possimus harum praesentium molestias nemo beatae quisquam, qui, atque incidunt alias debitis explicabo distinctio dolorem iste sapiente repudiandae. Aperiam, quaerat ex?'
  },
  {
    id: 3,
    image: AVTR3,
    name: 'Angel Uray',
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, possimus harum praesentium molestias nemo beatae quisquam, qui, atque incidunt alias debitis explicabo distinctio dolorem iste sapiente repudiandae. Aperiam, quaerat ex?'
  },
  {
    id: 4,
    image: AVTR4,
    name: 'Angel Uray',
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