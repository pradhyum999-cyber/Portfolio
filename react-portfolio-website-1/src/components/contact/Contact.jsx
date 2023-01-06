import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>pradhum101@gmail.com</h5>
          <a href='mailto:pradhum101@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+917774801785</h5>
          <a href='https://wa.me/+917774801785' target='_blank'>Send a Message</a>
          </article>
        </div>
        <form action=''>
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='text' name='email' placeholder='Your Email' required/>
        <textarea type='message' rows='7' name='message' placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact