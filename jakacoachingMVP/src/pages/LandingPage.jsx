import React from 'react'
import {  useNavigate } from 'react-router-dom';

// css
import './LandingPage.css'
import backPhoto from '../assets/backPhoto.jpg'

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
        {/* <div style={{color: "white"}}>LandingPage : www.tools.jakacoaching.com (example)</div> */}
        <div className='LPButtons'> 
            <div style={{color: "white"}} >www.tools.jakacoaching.com (example) </div>
             <button className='LPButton' onClick={()=>navigateVer1()}>Range viewer</button>
             <button className='LPButton' onClick={() => navigatePostflop()}>Postflop viewer</button>
             <button className='LPButton' disabled={false}>hand converter</button>
             <button className='LPButton'disabled={false}>app for sharing shares</button>
             <button className='LPButton' disabled={false}>app for monitoring live results</button>
            
        </div>
        <img src={backPhoto} alt="Logo" />
    </div>
    
  )
}

export default LandingPage