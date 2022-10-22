import React, {useState, useEffect} from 'react'

// css
import './RangeViewerComponent.css'

function RangeViewerComponent() {

    // big blinds toggle
    const [toggle, setToggle] = useState(false)

    // big blinds state
    const [BB100, setBB100] = useState(false)
    const [BB100Style, setBBStyle] = useState('#FCFCFC')

    const [BB60, setBB60] = useState(false)
    const [BB60Style, setBB60Style] = useState('#FCFCFC')

    const [BB40, setBB40] = useState(false)
    const [BB40Style, setBB40Style] = useState('#FCFCFC')

    const [BB30, setBB30] = useState(false)
    const [BB30Style, setBB30Style] = useState('#FCFCFC')

    const [BB20, setBB20] = useState(false)
    const [BB20Style, setBB20Style] = useState('#FCFCFC')

    // use effect for changing states, activates by toggle
    useEffect(()=> {

        if (BB100) {
            setBBStyle('lightblue')
        }else {
            setBBStyle('#FCFCFC')
        }

        if (BB60) {
            setBB60Style('lightblue')
        }else {
            setBB60Style('#FCFCFC')
        }
        if (BB40) {
            setBB40Style('lightblue')
        }else {
            setBB40Style('#FCFCFC')
        }
        if (BB30) {
            setBB30Style('lightblue')
        }else {
            setBB30Style('#FCFCFC')
        }
        if (BB20) {
            setBB20Style('lightblue')
        }else {
            setBB20Style('#FCFCFC')
        }        
    },[toggle])


    // on click function after clicking big blinds buttons
    function ChangeActiveBB(BB){
        
        if (BB === 100) {
            setBB100(true)
            setBB60(false)
            setBB40(false)
            setBB30(false)
            setBB20(false)            
        }
        if (BB === 60) {
            setBB100(false)
            setBB60(true)
            setBB40(false)
            setBB30(false)
            setBB20(false)            
        }
        if (BB === 40) {
            setBB100(false)
            setBB60(false)
            setBB40(true)
            setBB30(false)
            setBB20(false)            
        } 
        if (BB === 30) {
            setBB100(false)
            setBB60(false)
            setBB40(false)
            setBB30(true)
            setBB20(false)            
        }   
        if (BB === 20) {
            setBB100(false)
            setBB60(false)
            setBB40(false)
            setBB30(false)
            setBB20(true)            
        }        
        setToggle(current => !current);
    }

  return (
    <div className='RangeViewerComponentbox'>
        <div> 
            <button onClick={()=> ChangeActiveBB(100)} style={{backgroundColor: BB100Style}}> 100bb </button>
            <button onClick={()=> ChangeActiveBB(60)} style={{backgroundColor: BB60Style}}> 60bb </button>
            <button onClick={()=> ChangeActiveBB(40)} style={{backgroundColor: BB40Style}}> 40bb </button>
            <button onClick={()=> ChangeActiveBB(30)} style={{backgroundColor: BB30Style}}> 30bb </button>
            <button onClick={()=> ChangeActiveBB(20)} style={{backgroundColor: BB20Style}}> 20bb </button>
        </div>
        <div> 3 columns, action pre, first second</div>
        <div> two ranges</div>
    
    </div> // RangeViewerComponentbox
  )
}

export default RangeViewerComponent