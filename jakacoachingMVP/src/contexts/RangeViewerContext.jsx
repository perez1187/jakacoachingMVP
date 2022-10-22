import { createContext, useState } from "react";

const RangeViewerContext = createContext()

export function RangeViewerContextProvider({children}){

    // efective stack size context
    const [BB100, setBB100] = useState(true)
    const [BB60, setBB60] = useState(false)
    const [BB40, setBB40] = useState(false)
    const [BB30, setBB30] = useState(false)
    const [BB20, setBB20] = useState(false)

    // action preflop
    const [raiseFirstIn, setRaiseFirstIn] = useState(true)
    const [_3bet, set_3bet] = useState(false)

    return(
        <RangeViewerContext.Provider value={{
            BB100, setBB100,
            BB60, setBB60,
            BB40, setBB40,
            BB30, setBB30,
            BB20, setBB20,
            raiseFirstIn, setRaiseFirstIn,
            _3bet, set_3bet

        }}>
            {children}
        </RangeViewerContext.Provider>
    )
}

export default RangeViewerContext