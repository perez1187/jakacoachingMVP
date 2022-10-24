
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// context
import { RangeViewerContextProvider } from './contexts/RangeViewerContext.jsx'

import './App.css'
import MVPVersion1 from './pages/MVPVersion1'
import LandingPage from './pages/LandingPage.jsx'





function App() {
  

  return (
    <BrowserRouter>
    <RangeViewerContextProvider> 
      <Routes>
        <Route path='/' element={<LandingPage/>} />  
        <Route path='mvpversion1' element={<MVPVersion1/>} /> 
      </Routes>  
    </RangeViewerContextProvider>  
    </BrowserRouter>

  )
}

export default App
