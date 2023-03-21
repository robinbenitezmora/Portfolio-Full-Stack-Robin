import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './service.css'

const Service = () => {
  return (
    <section id='service'>
      <div className='service__title'>
        <h5>What I offer you</h5>
        <h2>My Services</h2>
      </div>

      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Process</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create information architecture that makes it easy for users to find what they need.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build wireframes and prototypes that provide a visual representation of the application's functionality.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design a visually appealing and consistent user interface that enhances the user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implement the UI design and create the front-end code that enables the application to function as intended.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conduct usability testing to ensure that the application is easy to use and meets the users' needs.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create a user-friendly website tailored to your business needs, with a focus on user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build a fully functional online store that allows you to sell your products to a wider audience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop a custom web-based software solution that helps you manage your data more efficiently.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Provide reliable maintenance to ensure that your website is always accessible to your customers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create mobile-responsive websites that helps you reach a wider audience and improve your search engine rankings.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Write compelling and persuasive copy for your website, social media, and other marketing materials.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create engaging public campaigns that build relationships with your subscribers and drive conversions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Manage your social media accounts, creating content that aligns with your brand and engages your followers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop a content strategy that aligns with your business goals, identifies key topics and themes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Produce video, and social media content, that helps tell your brand story and connects with your audience.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service