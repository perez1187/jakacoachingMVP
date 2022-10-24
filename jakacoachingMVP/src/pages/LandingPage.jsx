import React from 'react'
import {  useNavigate } from 'react-router-dom';

// css
import './LandingPage.css'

function LandingPage() {

    // navigate
    const navigate = useNavigate();

    const navigateVer1 = () => {           
        navigate('mvpversion1/');         
            };

  return (
    <>
        <div>LandingPage : www.tools.jakacoaching.com (example)</div>
        <div className='LPButtons'> 
             <button className='LPButton' onClick={()=>navigateVer1()}>Range viewer</button>
             <button className='LPButton'>Postflop viewer</button>
             <button className='LPButton' disabled={true}>hand converter</button>
             <button className='LPButton'disabled={true}>app for sharing shares</button>
             <button className='LPButton' disabled={true}>app for monitoring live results</button>
            
        </div>
    </>
    
  )
}

export default LandingPage