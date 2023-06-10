import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/juanlucasumali/" target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/juanlucasumali/" target="_blank"><AiFillGithub /></a>
        <a href="https://instagram.com/juanlucasumali/" target="_blank"><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials