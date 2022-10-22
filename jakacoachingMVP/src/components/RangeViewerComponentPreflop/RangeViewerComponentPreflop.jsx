import React, {useState, useEffect, useContext} from 'react'

// css
import  './RangeViewerComponentPreflop.css'

// context
import RangeViewerContext from '../../contexts/RangeViewerContext'

function RangeViewerComponentPreflop() {

    // toggle
    const [toggle, setToggle] = useState(false)

    // preflop action states
    const {raiseFirstIn, setRaiseFirstIn} = useContext(RangeViewerContext)
    const [raiseFirstInStyle, setraiseFirstInStyle] = useState('#FCFCFC')

    const {_3bet, set_3bet} = useContext(RangeViewerContext)
    const [_3betStyle, set_3betStyle] = useState('#FCFCFC')

    // use effect for changing states, activates by toggle
    useEffect(()=> {

        if (raiseFirstIn) {
            setraiseFirstInStyle('lightblue')
        }else {
            setraiseFirstInStyle('#FCFCFC')
        }
        if (_3bet) {
            set_3betStyle('lightblue')
        }else {
            set_3betStyle('#FCFCFC')
        }
        
    },[toggle])

    // on click function after clicking big blinds buttons
    function ChangePreflopAction(action){
        // action 1 = rfi
        // action 2 = 3b
    
        if (action === 1) {
            setRaiseFirstIn(true)
            set_3bet(false)         
        }
        if (action === 2) {
            setRaiseFirstIn(false)
            set_3bet(true)          
        }

        setToggle(current => !current); // switch toggle
    }


  return (
    <div className='RangeViewerComponentPreflopAction'> 
        <div className='RangeViewerComponentPreflopActionAction'> 
            <button onClick={()=> ChangePreflopAction(1)} style={{backgroundColor: raiseFirstInStyle}}> RFI </button>
            <button onClick={()=> ChangePreflopAction(2)} style={{backgroundColor: _3betStyle}}> 3bet </button>
        </div>
        <div className='RangeViewerComponentPreflopActionPlayer'> 
            <button>UTG</button>
            <button>MP</button>
            <button>HJ</button>
            <button>CO</button>
            <button>BTN</button>
            <button>SB</button>
            <button>BB</button>
        </div>
        <div className='RangeViewerComponentPreflopActionPlayer'> 
            <button>UTG</button>
            <button>MP</button>
            <button>HJ</button>
            <button>CO</button>
            <button>BTN</button>
            <button>SB</button>
            <button>BB</button>
        </div>
    </div>
  )
}

export default RangeViewerComponentPreflop