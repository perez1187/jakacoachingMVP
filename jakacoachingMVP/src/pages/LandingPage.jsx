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
    const navigatePostflop = () => {           
        navigate('postflop/');         
            };

  return (
    <div className='LandingPage'>
        <div style={{color: "white"}}>LandingPage : www.tools.jakacoaching.com (example)</div>
        <div className='LPButtons'> 
             <button className='LPButton' onClick={()=>navigateVer1()}>Range viewer</button>
             <button className='LPButton' onClick={() => navigatePostflop()}>Postflop viewer</button>
             <button className='LPButton' disabled={true}>hand converter</button>
             <button className='LPButton'disabled={true}>app for sharing shares</button>
             <button className='LPButton' disabled={true}>app for monitoring live results</button>
            
        </div>
    </div>
    
  )
}

export default LandingPage