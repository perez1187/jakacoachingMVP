import React from 'react'

import Logo from '../../assets/logo.png'

// css
import './NavbarComponent.css'

function NavBarComponent() {
  return (
    <div className='NCBox'>
        <div className='NCLogo'> <img src={Logo} alt="Logo" /></div>
        <div className='NCLogoNavigation'> items

            <div className='NCNavigation'>
                <div className='NCNavItem'>Home</div>
                <div className='NCNavItem'>Tools</div>
                <div className='NCNavItem'>Discord</div>
                <div className='NCNavItem'>Lessons</div>
                <div className='NCNavItem'>FAQ</div>
                <div className='NCNavItem'>Contact Us</div>
                <div className='NCNavItem'>Sign In</div>
            </div>
        
        </div>
    </div>
  )
}

export default NavBarComponent