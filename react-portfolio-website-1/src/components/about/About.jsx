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
    Experienced Software Engineer with a strong background in Microsoft Dynamics CRM and PowerApps. 
    Over 2 years of experience in delivering innovative solutions to complex business challenges. 
    Skilled in customizing Dynamics CRM to meet the specific needs of clients, resulting in improved productivity and efficiency. 
    Proficient in creating intuitive PowerApps to automate manual processes, streamline workflows and provide actionable insights. 
    I have successfully developed projects from conception to deployment, ensuring timely delivery and customer satisfaction. 
    Always eager to learn and embrace new technologies to stay ahead in the field.
      </p>

    </div>
    </div>
    


    </section>
  )
}

export default About