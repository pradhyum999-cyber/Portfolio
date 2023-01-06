import React from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Pradyumna</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://www.facebook.com' target= "_blank"><ImFacebook/></a>
      <a href='https://twitter.com/' target= "_blank"><ImTwitter/></a>
      <a href='https://www.instagram.com/' target= "_blank"><AiOutlineInstagram/></a>
      </div>

      <div className='footer__copyright'>
      <small>&copy; Pradyumna Bharadwaj. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer