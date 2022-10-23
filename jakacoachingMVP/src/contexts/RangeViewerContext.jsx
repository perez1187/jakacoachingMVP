import { createContext, useState } from "react";

const RangeViewerContext = createContext()

export function RangeViewerContextProvider({children}){

    // efective stack size context
    const [BB100, setBB100] = useState(true)
    const [BB60, setBB60] = useState(false)
    const [BB40, setBB40] = useState(false)
    const [BB30, setBB30] = useState(false)
    const [BB20, setBB20] = useState(false)

    // action preflop context
    const [raiseFirstIn, setRaiseFirstIn] = useState(true)
    const [_3bet, set_3bet] = useState(false)

    // player one context
    const [UTGP1, setUTGP1] = useState(true)
    const [MPP1, setMPP1] = useState(false)
    const [HJP1, setHJP1] = useState(false)
    const [COP1, setCOP1] = useState(false)
    const [BTNP1, setBTNP1] = useState(false)
    const [SBP1, setSBP1] = useState(false)
    const [BBP1, setBBP1] = useState(false)

    // player two context
    const [UTGP2, setUTGP2] = useState(false)
    const [MPP2, setMPP2] = useState(true)
    const [HJP2, setHJP2] = useState(false)
    const [COP2, setCOP2] = useState(false)
    const [BTNP2, setBTNP2] = useState(false)
    const [SBP2, setSBP2] = useState(false)
    const [BBP2, setBBP2] = useState(false)

    return(
        <RangeViewerContext.Provider value={{
            BB100, setBB100,
            BB60, setBB60,
            BB40, setBB40,
            BB30, setBB30,
            BB20, setBB20,
            raiseFirstIn, setRaiseFirstIn,
            _3bet, set_3bet,
            UTGP1, setUTGP1,
            MPP1, setMPP1,
            HJP1, setHJP1,
            COP1, setCOP1,
            BTNP1, setBTNP1,
            SBP1, setSBP1,
            BBP1, setBBP1,
            UTGP2, setUTGP2,
            MPP2, setMPP2,
            HJP2, setHJP2,
            COP2, setCOP2,
            BTNP2, setBTNP2,
            SBP2, setSBP2,
            BBP2, setBBP2
        }}>
            {children}
        </RangeViewerContext.Provider>
    )
}

export default RangeViewerContext