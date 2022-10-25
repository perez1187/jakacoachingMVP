import React from 'react'

import Logo from '../../assets/logo.png'

//css
import './FooterComponent.css'

function FooterComponent() {
  return (
    <div className='FooterBox'> 
        <div className='NCBox'>
        <div className='NCLogo'> <img src={Logo} alt="Logo" /></div>
        <div className='NCLogoNavigation'> items

            <div className='NCNavigation'>
                <div className='NCNavItem'>Facebook</div>
                <div className='NCNavItem'>Twitter</div>
                <div className='NCNavItem'>Instagram</div>
                <div className='NCNavItem'>Youtube</div>

            </div>
        
        </div>
    </div>
</div>
  )
}

export default FooterComponent