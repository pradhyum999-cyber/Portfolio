import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
    <div className='about__me'>
    <div className='about__me__image'><img src={ME} alt='About-Me'/>
    </div>
    </div>  
 

    <div className='about__content'>
    <div className='about__cards'>

    <article className='about__card'>
    <FaAward className='about__icon'></FaAward>
    <h5>Experience</h5>
    <small>2+ Years Working</small>
    </article>

    <article className='about__card'>
    <VscFolderLibrary className='about__icon'></VscFolderLibrary>
    <h5>Projects</h5>
    <small>3</small>
    </article>
    </div>
    <p>
      Pradyumna is a software developer with two years of experience working 
      at Accenture. He specializes in working on Dynamics CRM. 
      In his role at Accenture, Pradyumna uses his technical skills to develop 
      and maintain software solutions for clients. In his free time, 
      Pradyumna enjoys staying up-to-date with the latest developments 
      in the tech industry and exploring new tools and technologies.
      </p>

    </div>
    </div>
    


    </section>
  )
}

export default About