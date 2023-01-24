import React from 'react'
import {BsLinkedin,BsGithub,BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials' >
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="http://github.com"><BsGithub/> </a>
        <a href="http://facebook.com"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials