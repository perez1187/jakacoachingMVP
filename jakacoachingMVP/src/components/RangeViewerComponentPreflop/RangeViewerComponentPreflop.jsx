import React, {useState, useEffect, useContext} from 'react'

// css
import  './RangeViewerComponentPreflop.css'

// context
import RangeViewerContext from '../../contexts/RangeViewerContext'

function RangeViewerComponentPreflop() {

    // button colors
    const activeButtonColor = 'lightblue'
    const notActiveButtonColor = '#FCFCFC'

    // toggle 
    const [toggle, setToggle] = useState(false) //preflop action
    const [toggleP1, setToggleP1] = useState(false) // position player 1
    const [toggleP2, setToggleP2] = useState(false) // position player 2

    // preflop action states
    const {raiseFirstIn, setRaiseFirstIn} = useContext(RangeViewerContext)
    const [raiseFirstInStyle, setraiseFirstInStyle] = useState(notActiveButtonColor)

    const {_3bet, set_3bet} = useContext(RangeViewerContext)
    const [_3betStyle, set_3betStyle] = useState(notActiveButtonColor)

    // player one states
    const {UTGP1, setUTGP1} = useContext(RangeViewerContext)
    const [UTGP1Style, setUTGP1Style] = useState(notActiveButtonColor)

    const {MPP1, setMPP1} = useContext(RangeViewerContext)
    const [MPP1Style, setMPP1Style] = useState(notActiveButtonColor)

    const {HJP1, setHJP1} = useContext(RangeViewerContext)
    const [HJP1Style, setHJP1Style] = useState(notActiveButtonColor)

    const {COP1, setCOP1} = useContext(RangeViewerContext)
    const [COP1Style, setCOP1Style] = useState(notActiveButtonColor)

    const {BTNP1, setBTNP1} = useContext(RangeViewerContext)
    const [BTNP1Style, setBTNP1Style] = useState(notActiveButtonColor)

    const {SBP1, setSBP1} = useContext(RangeViewerContext)
    const [SBP1Style, setSBP1Style] = useState(notActiveButtonColor)

    const {BBP1, setBBP1} = useContext(RangeViewerContext)
    const [BBP1Style, setBBP1Style] = useState(notActiveButtonColor)    

    // player two states
    const {UTGP2, setUTGP2} = useContext(RangeViewerContext)
    const [UTGP2Style, setUTGP2Style] = useState(notActiveButtonColor)

    const {MPP2, setMPP2} = useContext(RangeViewerContext)
    const [MPP2Style, setMPP2Style] = useState(notActiveButtonColor)

    const {HJP2, setHJP2} = useContext(RangeViewerContext)
    const [HJP2Style, setHJP2Style] = useState(notActiveButtonColor)

    const {COP2, setCOP2} = useContext(RangeViewerContext)
    const [COP2Style, setCOP2Style] = useState(notActiveButtonColor)

    const {BTNP2, setBTNP2} = useContext(RangeViewerContext)
    const [BTNP2Style, setBTNP2Style] = useState(notActiveButtonColor)

    const {SBP2, setSBP2} = useContext(RangeViewerContext)
    const [SBP2Style, setSBP2Style] = useState(notActiveButtonColor)

    const {BBP2, setBBP2} = useContext(RangeViewerContext)
    const [BBP2Style, setBBP2Style] = useState(notActiveButtonColor)


    // use effect for changing states in preflop action, activates by toggle
    useEffect(()=> {

        if (raiseFirstIn) {
            setraiseFirstInStyle(activeButtonColor)
        }else {
            setraiseFirstInStyle(notActiveButtonColor)
        }
        if (_3bet) {
            set_3betStyle(activeButtonColor)
        }else {
            set_3betStyle(notActiveButtonColor)
        }
        
    },[toggle])

    // use effect for player 1 styles
    useEffect(()=> {

        if (UTGP1) {
            setUTGP1Style(activeButtonColor)
        }else {
            setUTGP1Style(notActiveButtonColor)
        }
        if (MPP1) {
            setMPP1Style(activeButtonColor)
        }else {
            setMPP1Style(notActiveButtonColor)
        }
        if (HJP1) {
            setHJP1Style(activeButtonColor)
        }else {
            setHJP1Style(notActiveButtonColor)
        }
        if (COP1) {
            setCOP1Style(activeButtonColor)
        }else {
            setCOP1Style(notActiveButtonColor)
        }        
        if (BTNP1) {
            setBTNP1Style(activeButtonColor)
        }else {
            setBTNP1Style(notActiveButtonColor)
        }        
        if (SBP1) {
            setSBP1Style(activeButtonColor)
        }else {
            setSBP1Style(notActiveButtonColor)
        }
        if (BBP1) {
            setBBP1Style(activeButtonColor)
        }else {
            setBBP1Style(notActiveButtonColor)
        }
        
    },[toggleP1])

        // use effect for player 2 styles
        useEffect(()=> {

            if (UTGP2) {
                setUTGP2Style(activeButtonColor)
            }else {
                setUTGP2Style(notActiveButtonColor)
            }
            if (MPP2) {
                setMPP2Style(activeButtonColor)
            }else {
                setMPP2Style(notActiveButtonColor)
            }
            if (HJP2) {
                setHJP2Style(activeButtonColor)
            }else {
                setHJP2Style(notActiveButtonColor)
            }
            if (COP2) {
                setCOP2Style(activeButtonColor)
            }else {
                setCOP2Style(notActiveButtonColor)
            }        
            if (BTNP2) {
                setBTNP2Style(activeButtonColor)
            }else {
                setBTNP2Style(notActiveButtonColor)
            }        
            if (SBP2) {
                setSBP2Style(activeButtonColor)
            }else {
                setSBP2Style(notActiveButtonColor)
            }
            if (BBP2) {
                setBBP2Style(activeButtonColor)
            }else {
                setBBP2Style(notActiveButtonColor)
            }
            
        },[toggleP2])

    // on click function after clicking preflop action
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

    // on click function after clicking player 1
    function ChangePlayer1(action){
        // action 1 = utg
        // action 2 = mp
        // etc
    
        if (action === 1) {
            setUTGP1(true)
            setMPP1(false)
            setHJP1(false) 
            setCOP1(false) 
            setBTNP1(false) 
            setSBP1(false) 
            setBBP1(false)          
        }
        if (action === 2) {
            setUTGP1(false)
            setMPP1(true)
            setHJP1(false) 
            setCOP1(false) 
            setBTNP1(false) 
            setSBP1(false) 
            setBBP1(false)          
        }
        if (action === 3) {
            setUTGP1(false)
            setMPP1(false)
            setHJP1(true) 
            setCOP1(false) 
            setBTNP1(false) 
            setSBP1(false) 
            setBBP1(false)          
        }
        if (action === 4) {
            setUTGP1(false)
            setMPP1(false)
            setHJP1(false) 
            setCOP1(true) 
            setBTNP1(false) 
            setSBP1(false) 
            setBBP1(false)          
        }
        if (action === 5) {
            setUTGP1(false)
            setMPP1(false)
            setHJP1(false) 
            setCOP1(false) 
            setBTNP1(true) 
            setSBP1(false) 
            setBBP1(false)          
        }
        if (action === 6) {
            setUTGP1(false)
            setMPP1(false)
            setHJP1(false) 
            setCOP1(false) 
            setBTNP1(false) 
            setSBP1(true) 
            setBBP1(false)          
        }
        if (action === 7) {
            setUTGP1(false)
            setMPP1(false)
            setHJP1(false) 
            setCOP1(false) 
            setBTNP1(false) 
            setSBP1(false) 
            setBBP1(true)          
        }

        setToggleP1(current => !current); // switch toggle
    }
    
    // on click function after clicking player 2
    function ChangePlayer2(action){
        // action 1 = utg
        // action 2 = mp
        // etc
    
        if (action === 1) {
            setUTGP2(true)
            setMPP2(false)
            setHJP2(false) 
            setCOP2(false) 
            setBTNP2(false) 
            setSBP2(false) 
            setBBP2(false)          
        }
        if (action === 2) {
            setUTGP2(false)
            setMPP2(true)
            setHJP2(false) 
            setCOP2(false) 
            setBTNP2(false) 
            setSBP2(false) 
            setBBP2(false)          
        }
        if (action === 3) {
            setUTGP2(false)
            setMPP2(false)
            setHJP2(true) 
            setCOP2(false) 
            setBTNP2(false) 
            setSBP2(false) 
            setBBP2(false)           
        }
        if (action === 4) {
            setUTGP2(false)
            setMPP2(false)
            setHJP2(false) 
            setCOP2(true) 
            setBTNP2(false) 
            setSBP2(false) 
            setBBP2(false)           
        }
        if (action === 5) {
            setUTGP2(false)
            setMPP2(false)
            setHJP2(false) 
            setCOP2(false) 
            setBTNP2(true) 
            setSBP2(false) 
            setBBP2(false)            
        }
        if (action === 6) {
            setUTGP2(false)
            setMPP2(false)
            setHJP2(false) 
            setCOP2(false) 
            setBTNP2(false) 
            setSBP2(true) 
            setBBP2(false)            
        }
        if (action === 7) {
            setUTGP2(false)
            setMPP2(false)
            setHJP2(false) 
            setCOP2(false) 
            setBTNP2(false) 
            setSBP2(false) 
            setBBP2(true)            
        }

        setToggleP2(current => !current); // switch toggle
    }    




  return (
    <div className='RangeViewerComponentPreflopAction'> 
        <div className='RangeViewerComponentPreflopActionAction'> 
            <button onClick={()=> ChangePreflopAction(1)} style={{backgroundColor: raiseFirstInStyle}}> RFI </button>
            <button onClick={()=> ChangePreflopAction(2)} style={{backgroundColor: _3betStyle}}> 3bet </button>
        </div>
        <div className='RangeViewerComponentPreflopActionPlayer'> 
            <button onClick={()=> ChangePlayer1(1)} style={{backgroundColor: UTGP1Style}}>UTG</button>
            <button onClick={()=> ChangePlayer1(2)} style={{backgroundColor: MPP1Style}}>MP</button>
            <button onClick={()=> ChangePlayer1(3)} style={{backgroundColor: HJP1Style}}>HJ</button>
            <button onClick={()=> ChangePlayer1(4)} style={{backgroundColor: COP1Style}}>CO</button>
            <button onClick={()=> ChangePlayer1(5)} style={{backgroundColor: BTNP1Style}}>BTN</button>
            <button onClick={()=> ChangePlayer1(6)} style={{backgroundColor: SBP1Style}}>SB</button>
            <button disabled={true} onClick={()=> ChangePlayer1(7)} style={{backgroundColor: BBP1Style}}>BB</button>
        </div>
        <div className='RangeViewerComponentPreflopActionPlayer'> 
        <button onClick={()=> ChangePlayer2(1)} style={{backgroundColor: UTGP2Style}}>UTG</button>
            <button onClick={()=> ChangePlayer2(2)} style={{backgroundColor: MPP2Style}}>MP</button>
            <button onClick={()=> ChangePlayer2(3)} style={{backgroundColor: HJP2Style}}>HJ</button>
            <button onClick={()=> ChangePlayer2(4)} style={{backgroundColor: COP2Style}}>CO</button>
            <button onClick={()=> ChangePlayer2(5)} style={{backgroundColor: BTNP2Style}}>BTN</button>
            <button onClick={()=> ChangePlayer2(6)} style={{backgroundColor: SBP2Style}}>SB</button>
            <button disabled={false} onClick={()=> ChangePlayer2(7)} style={{backgroundColor: BBP2Style}}>BB</button>
        </div>
    </div>
  )
}

export default RangeViewerComponentPreflop