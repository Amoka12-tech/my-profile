import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

function TopView() {
  return (
    <section
      id='top_view' 
      style={{ 
        background: `url(${process.env.PUBLIC_URL + '/bg_tech_set.jpg'})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
       }} 
      className={`container bg-sky-500 portrait:bg-none  min-h-screen min-w-full justify-center flex items-center flex-col`}>
        <div className={`container bg-sky-500 bg-opacity-95  min-h-screen min-w-full justify-center flex items-center flex-col`}>
          <div className=' w-60 h-60 rounded-full bg-white'>
              <img src={process.env.PUBLIC_URL + '/profile_pic.jpeg'} alt="" className='w-60 h-60 rounded-full' />
          </div>
              <h1 className='font-semibold text-white text-center max-sm:text-5xl text-6xl text mt-10 font-kaushan tracking-wide -rotate-6'>
                - Abdulmutalib Amoka -
              </h1>
              <span className='font-mono text-white max-sm:text-lg text-2xl tracking-normal font-medium mt-12 text-center'>
                Web & mobile app full-stack developer
              </span>
              <div className='flex justify-center flex-row mt-10'>
                <a href='#' className='mr-8'>
                  <FontAwesomeIcon icon={faTwitter} className=' text-4xl text-white' href='#'/>
                </a>

                <a href='#' className='mr-8'>
                  <FontAwesomeIcon icon={faFacebook} className=' text-4xl text-white' href='#'/>
                </a>

                <a href='#' className='mr-8'>
                  <FontAwesomeIcon icon={faLinkedin} className=' text-4xl text-white' href='#'/>
                </a>

                <a href='#' className=''>
                  <FontAwesomeIcon icon={faGithub} className=' text-4xl text-white' href='#'/>
                </a>
              </div>
        </div>
    </section>
  )
}

export default TopView