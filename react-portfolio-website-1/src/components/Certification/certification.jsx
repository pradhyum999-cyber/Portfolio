import React from 'react'
import './certification.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Certification = () => {
  return (
    <section id='certification'>
      <h2>Certifications</h2>     
      <div className='container certification__container'>
          <div className='certification__content'>
            <article className='certification__details'>
              <BsPatchCheckFill className='certification__details-icons' />
              <div>
                <h4>PL-900</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='certification__details'>
              <BsPatchCheckFill className='certification__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='certification__details'>
              <BsPatchCheckFill className='certification__details-icons' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='certification__details'>
              <BsPatchCheckFill className='certification__details-icons' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='certification__details'>
              <BsPatchCheckFill className='certification__details-icons' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Certification