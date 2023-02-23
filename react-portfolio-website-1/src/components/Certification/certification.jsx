import React from 'react'
import './certification.css'
import { TbCertificate } from 'react-icons/tb'

const Certification = () => {
  return (
    <section id='certification'>
      <h2>Certifications</h2>     
      <div className='container certification__container'>
          <div className='certification__content'>
            <article className='certification__details'>
              <TbCertificate className='certification__details-icons' />
              <div>
                <h4>PL - 900</h4>
                <small className='text-light'>Microsoft Certified: Power Platform Fundamentals</small>
              </div>
            </article>
            <article className='certification__details'>
              <TbCertificate className='certification__details-icons' />
              <div>
                <h4>AZ - 900</h4>
                <small className='text-light'>Microsoft Certified: Azure Fundamentals</small>
              </div>
            </article>
            <article className='certification__details'>
              <TbCertificate className='certification__details-icons' />
              <div>
                <h4>PL - 400</h4>
                <small className='text-light'>Microsoft Certified: Power Platform Developer Associate</small>
              </div>
            </article>
            <article className='certification__details'>
              <TbCertificate className='certification__details-icons' />
              <div>
                <h4>PL - 200</h4>
                <small className='text-light'>Microsoft Certified: Power Platform Functional Consultant Associate</small>
              </div>
            </article>
            <article className='certification__details'>
              <TbCertificate className='certification__details-icons' />
              <div>
                <h4>PL - 600</h4>
                <small className='text-light'>Microsoft Certified: Power Platform Solution Architect Expert</small></div>
            </article>
          </div>
        </div>
    </section>
  )
}

export default Certification