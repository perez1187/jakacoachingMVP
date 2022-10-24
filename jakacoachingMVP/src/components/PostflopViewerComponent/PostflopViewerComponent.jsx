import React, {useState, useEffect} from 'react'

// manual data
import jsonData from '../../assets/example.json'

// css
import './PostflopViewerComponent.css'

function PostflopViewerComponent() {

    const [data, setData] = useState([]) // array with hands data
    const [oneHand, setOneHand] = useState('')

    // use states for data
    const [bet17EV, setBet17EV] = useState('0')    
    const [bet17Freq, setBet17Freq] = useState('0') 

    const [bet30EV, setBet30EV] = useState('0')
    const [bet30Freq, setBet30Freq] = useState('0')

    const [bet60EV, setBet60EV] = useState('0')
    const [bet60Freq, setBet60Freq] = useState('0')

    const [bet100EV, setBet100EV] = useState('0')
    const [bet100Freq, setBet100Freq] = useState('0')

    const [betCHECKEV, setBetCHECKEV] = useState('0')
    const [betCHECKFreq, setBetCHECKFreq] = useState('0')

    const [IPEQR, setIPEQR] = useState('0')
    const [IPEV, setIPEV] = useState('0')
    const [IPEquity, setEquity] = useState('0')
    const [WeightIP, setWeightIP] = useState('0')
    
    // render hands
    function RenderHands() {
        // const data = jsonData
        const handsData = data.map( 
            (element) => {
                return (
                    <button onMouseEnter={()=>setOneHand(element.Hand)} key={element.Hand}>{element.Hand} </button>
                )
             }
        )
        return (
            <div>{handsData}</div>
        )
    }

    // uploadiing data from manual json file (or something similar to json)
    useEffect(()=>{
        const myData = jsonData
        // const myDataNames = Object.keys(myData)
        // console.log(myDataNames)

        const myDataValues = Object.values(myData)
        setData(myDataValues)   
    },[])

    // use effect for setting dashboard with ino about hands
    useEffect(()=> {
        console.log(oneHand)
        function HandObject(hh) {
            let object = {}
            try{
                object = data.find(obj => obj.Hand == hh)
            } catch(e) {
                console.log("wrong hand")
            }
            console.log(object)
            try{
                // console.log(object["BET 17% EV"])
                // we set value for percent of betting

                // BET 17% FREQ
                if (object["BET 17% freq"] == null) {
                    setBet17Freq('0')
                } else {
                    setBet17Freq(object["BET 17% freq"])
                }
                
                // BET 17% EV
                if (object["BET 17% EV"] == null) {
                    setBet17EV('0')
                } else {
                    setBet17EV(object["BET 17% freq"])
                }

                // BET 30% EV
                if (object["BET 30% EV"] == null) {
                    setBet30EV('0')
                } else {
                    setBet30EV(object["BET 30% EV"])
                }

                // BET 30% FREQ
                if (object["BET 30% freq"] == null) {
                    setBet30Freq('0')
                } else {
                    setBet30Freq(object["BET 30% freq"])
                } 

                // BET 60% EV
                if (object["BET 60% EV"] == null) {
                    setBet60EV('0')
                } else {
                    setBet60EV(object["BET 60% EV"])
                }
                
                // BET 60% FREQ
                if (object["BET 60% freq"] == null) {
                    setBet60Freq('0')
                } else {
                    setBet60Freq(object["BET 60% freq"])
                }
                
                // BET 100% EV
                if (object["BET 100% EV"] == null) {
                    setBet100EV('0')
                } else {
                    setBet100EV(object["BET 100% EV"])
                }
                
                // BET 100% FREQ
                if (object["BET 100% freq"] == null) {
                    setBet100Freq('0')
                } else {
                    setBet100Freq(object["BET 100% freq"])
                }
                
                // BET check ev
                if (object["CHECK EV"] == null) {
                    setBetCHECKEV('0')
                } else {
                    setBetCHECKEV(object["CHECK EV"])
                }
                
                // BET check freq
                if (object["CHECK freq"] == null) {
                    setBetCHECKFreq('0')
                } else {
                    setBetCHECKFreq(object["CHECK freq"])
                }                                    
                
            } catch(e) {
                console.log('cos nie tak')
            }
            
        }
        HandObject(oneHand)
    },[oneHand])




  return (
    <div> 
        <div onClick={()=> CheckData()}>PostflopViewerComponent</div>
        <div>Situation: </div>
        <div> Info about the hand:</div> 
        <div className='hand'>{oneHand}</div> 
        <div className='freqOfHand'>
            <div className='freqOfHandMiniBox'>
                <div>17% CB</div>
                <div>{bet17Freq}</div>
            </div>
            <div className='freqOfHandMiniBox'>
                <div>30% CB</div>
                <div>{bet30Freq}</div>
            </div>
            <div className='freqOfHandMiniBox'> 
                <div>60% CB</div>
                <div>{bet60Freq}</div>
            </div>
            <div className='freqOfHandMiniBox'>
                <div>100% CB</div>
                <div>{bet100Freq}</div>
            </div>
            <div className='freqOfHandMiniBox'>
                <div>CHECK freq</div>
                <div>{betCHECKFreq}</div>
            </div>                
        </div>

        <div>{RenderHands()}</div>
    </div>
  )
}

export default PostflopViewerComponent