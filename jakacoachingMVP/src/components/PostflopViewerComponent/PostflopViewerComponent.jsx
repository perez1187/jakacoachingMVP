import React, {useState, useEffect} from 'react'

import jsonData from '../../assets/example.json'

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
                
            } catch(e) {
                console.log('cos nie tak')
            }
            
        }
        HandObject(oneHand)
    },[oneHand])




  return (
    <div> 
        <div onClick={()=> CheckData()}>PostflopViewerComponent</div>
        <div> Info about the hand: {oneHand}</div>
        <div>
            <div>
                <div>17% CB</div>
                <div>{bet17Freq}</div>
            </div>
        </div>

        <div>{RenderHands()}</div>
    </div>
  )
}

export default PostflopViewerComponent