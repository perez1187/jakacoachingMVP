import React, {useState, useEffect} from 'react'

// manual data
import jsonData2 from '../../assets/example.json'
import jsonData from '../../assets/example222.json'

// css
import './PostflopViewerComponent.css'

function PostflopViewerComponent() {

    // useState for fetching flop data
    const [myData, setMyData] = useState(jsonData2)
    
    // temporary button colors
    const activeButtonColor = 'lightblue'
    const notActiveButtonColor = '#FCFCFC'

    // temporary use state for manualy choosing flop
    const [flop332, setFlop332] = useState(false)
    const [flop332Style, setFlop332Style] = useState(activeButtonColor)
    
    const [flopA86, setFlopA86] = useState(false)
    const [flopA86Style, setFlopA86Style] = useState(notActiveButtonColor)

    const [data, setData] = useState([]) // array with hands data
    const [oneHand, setOneHand] = useState('')

    // use states for data
    const [bet17EV, setBet17EV] = useState('0')    
    const [bet17Freq, setBet17Freq] = useState('0') 
    const [bet17FreqTot, setBet17Tot] = useState('0') 

    const [bet30EV, setBet30EV] = useState('0')
    const [bet30Freq, setBet30Freq] = useState('0')
    const [bet30FreqTot, setBet30FreqTot] = useState('0')

    const [bet60EV, setBet60EV] = useState('0')
    const [bet60Freq, setBet60Freq] = useState('0')
    const [bet60FreqTot, setBet60FreqTot] = useState('0')

    const [bet100EV, setBet100EV] = useState('0')
    const [bet100Freq, setBet100Freq] = useState('0')
    const [bet100FreqTot, setBet100FreqTot] = useState('0')

    const [betCHECKEV, setBetCHECKEV] = useState('0')
    const [betCHECKFreq, setBetCHECKFreq] = useState('0')
    const [betCHECKFreqTot, setBetCHECKFreqTot] = useState('0')

    const [IPEQR, setIPEQR] = useState('0')
    const [IPEV, setIPEV] = useState('0')
    const [IPEquity, setEquity] = useState('0')
    const [WeightIP, setWeightIP] = useState('0')

    // manualy choosing flop
    function ManualChooseFlop(flop){
        if (flop == 1) {
            setFlop332(true)
            setFlop332Style(activeButtonColor)
            setFlopA86(false)
            setFlopA86Style(notActiveButtonColor)

            setMyData(jsonData2)
        } else {
            setFlop332(false)
            setFlop332Style(notActiveButtonColor)
            setFlopA86(true) 
            setFlopA86Style(activeButtonColor)
            setMyData(jsonData)           
        }
    }
    
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
        function ChooseFlop() {
            // const myData = jsonData
            // const myDataNames = Object.keys(myData)
            // console.log(myDataNames)
    
            const myDataValues = Object.values(myData)
            setData(myDataValues)
        }
        ChooseFlop()
    },[myData])

    // use effect for setting dashboard with ino about hands
    useEffect(()=> {
        // console.log(oneHand)
        function HandObject(hh) {
            let object = {}
            try{
                object = data.find(obj => obj.Hand == hh)
            } catch(e) {
                console.log("wrong hand")
            }
            // console.log(object)
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
                    setBet17EV(object["BET 17% EV"])
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
                // EQR IP
                if (object["IP EQR"] == null) {
                    setIPEQR('0')
                } else {
                    setIPEQR(object["IP EQR"])
                }
                // EV IP
                if (object["IP EV"] == null) {
                    setIPEV('0')
                } else {
                    setIPEV(object["IP EV"])
                }
               // EQUITY IP
                if (object["IP Equity"] == null) {
                    setEquity('0')
                } else {
                    setEquity(object["IP Equity"])
                }
                // WEIGHT IP
                if (object["Weight IP"] == null) {
                    setWeightIP('0')
                } else {
                    setWeightIP(object["Weight IP"])
                }                                                                                  
    
            } catch(e) {
                console.log('cos nie tak')
            }            
        }
        HandObject(oneHand)
    },[oneHand])

    // use effect for fanding overal stats on particular board
    useEffect(()=>{
        function FindBoardStats(){

            let sumCB17 = 0
            let sumCB30 = 0
            let sumCB60 = 0
            let sumCB100 = 0
            let sumCheck = 0
            let sumId = 0

            const ScaningData = data.map(
                (element) => {
                    if (element["BET 17% freq"] == null){
                        sumCB17 +=0
                    } else {
                        sumCB17 += element["BET 17% freq"] * element["Weight IP"]
                        sumCB30 += element["BET 30% freq"] * element["Weight IP"]
                        sumCB60 += element["BET 60% freq"] * element["Weight IP"]
                        sumCB100 += element["BET 100% freq"] * element["Weight IP"]
                        sumCheck += element["CHECK freq"] * element["Weight IP"]
                        sumId +=1
                    }                    
                }
            )
            setBet17Tot(Math.round( ((sumCB17/sumId)*100) )/100)
            setBet30FreqTot(Math.round( ((sumCB30/sumId)*100) )/100)
            setBet60FreqTot(Math.round( ((sumCB60/sumId)*100) )/100)
            setBet100FreqTot(Math.round( ((sumCB100/sumId)*100) )/100)
            setBetCHECKFreqTot(Math.round( ((sumCheck/sumId)*100) )/100)
            return console.log(sumCB17/sumId)
        }
        FindBoardStats()
    },[data])

  return (
    <div > 
        {/* <div onClick={()=> CheckData()}>PostflopViewerComponent</div> */}
        <div className='groupedBox' >
            <div>Situation: </div>
            <div className='PVCPostions'>RFI BTN v BB 60bb</div>
            <button disabled={true}> change </button>
        </div>
        <div className='groupedBox' >
            <div>FLOP: </div>
            <div className='PVCPostions'>
                 <button onClick={()=> ManualChooseFlop(1)} style={{backgroundColor: flop332Style}}>3s 3h 2d</button>
                 <button onClick={()=> ManualChooseFlop(2)} style={{backgroundColor: flopA86Style}}>As 8s 6s</button>
            </div>
            {/* <button disabled={true}> change </button> */}
        </div>
        <div> in the future search box/matrix with cards for finding a flop</div>
        <div> Overall stats </div>
        <div className='PVCOverallStatsBox'>
            <div className='freqOfHandMiniBoxMain'>
                <div>100% CB</div>
                <div>{bet100FreqTot}</div>
            </div>
            <div className='freqOfHandMiniBoxMain'> 
                <div>60% CB</div>
                <div>{bet60FreqTot}</div>
            </div>
            <div className='freqOfHandMiniBoxMain'>
                <div>30% CB</div>
                <div>{bet30FreqTot}</div>
            </div>
            <div className='freqOfHandMiniBoxMain'>
                <div>17% CB</div>
                <div>{bet17FreqTot}</div>
            </div>
            <div className='freqOfHandMiniBoxMain'>
                <div>CHECK freq</div>
                <div>{betCHECKFreqTot}</div>               
            </div>             
        </div>
        <div> Info about the hand: (hover the mouse over a hands on the matrix)</div> 
        <div className='hand'>{oneHand}</div> 
        <div className='freqOfHand'>
            <div className='freqOfHandMiniBox'>
                <div>100% CB</div>
                <div>{bet100Freq}</div>
            </div>
            <div className='freqOfHandMiniBox'> 
                <div>60% CB</div>
                <div>{bet60Freq}</div>
            </div>
            <div className='freqOfHandMiniBox'>
                <div>30% CB</div>
                <div>{bet30Freq}</div>
            </div>
            <div className='freqOfHandMiniBox'>
                <div>17% CB</div>
                <div>{bet17Freq}</div>
            </div>
            <div className='freqOfHandMiniBox'>
                <div>CHECK freq</div>
                <div>{betCHECKFreq}</div>               
            </div>   
        </div>{/* freqOfHand */}
        <div>additional info</div>
        <div className='additionalInfoBox'>
            <div>EV CB 17%: {bet17EV}</div>
            <div>EV CB 30%: {bet30EV}</div>
            <div>EV CB 60%: {bet60EV}</div>
            <div>EV CB 100%: {bet100EV}</div>
            <div>EV CHECK: {betCHECKEV}</div>
            <div>EQR: {IPEQR}</div>
            <div>EV: {IPEV}</div>
            <div>EQUITY: {IPEquity}</div>
            <div>WEIGHT: {WeightIP}</div>
        </div>

        <div className='PVCRenderhands'>{RenderHands()}</div>
    </div>
  )
}

export default PostflopViewerComponent