import React, { useRef } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_1x9x9x9', 'template_1x9x9x9', form.current, 'user_1x9x9x9')
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__icon' />
            <h4>Email</h4>
            <h5>robinbenitez@yahoo.com</h5>
            <a href="mailto:robinbenitez@yahoo.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__icon' />
            <h4>Messenger</h4>
            <h5>robinbenitez</h5>
            <a href="https://m.me/ernest.achiever" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__icon' />
            <h4>Whatsapp</h4>
            <h5>+57 300 80 600 20</h5>
            <a href="https://wa.me/573008060020" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your email address' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact