import React from 'react'
import './Header.css'
import Resume from './Resume'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='title'>👋🏽 Kamusta!</div>
        <div className='subtitle'>I'm Juan Lucas!</div>
        <Resume />
        <HeaderSocials />

      </div>
    </header>
  )
}

export default Header