import React from 'react'
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { Helmet } from 'react-helmet'


function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
      <Helmet>
        <title>Dennis James Portfolio</title>
        <meta name="description" content="Dennis James Portfolio" />
        <meta name="keywords" content="Dennis James Portfolio" />
      </Helmet>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home'>
          <img src={logo} className='mx-2' width={150} height={33} alt='logo' />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/dennis-james-024982241/" target='_blank' className='transition-transform transform hover:scale-125'><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/dennis-del" target='_blank' className='transition-transform transform hover:scale-125'><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://x.com/DennisJ68619524" target='_blank' className='transition-transform transform hover:scale-125'><FontAwesomeIcon icon={faSquareTwitter} /></a>
        <a href="https://www.facebook.com/" target='_blank' className='transition-transform transform hover:scale-125'><FontAwesomeIcon icon={faSquareFacebook} /></a>
      </div>
    </nav>
  )
}

export default Navbar

