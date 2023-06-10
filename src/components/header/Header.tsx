import React from 'react'
import './Header.css'
import Resume from './Resume'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Juan Lucas</h1>
        <h5 className="text-light">Computer Science @ UC Berkeley</h5>
        <Resume />
        <HeaderSocials />

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header