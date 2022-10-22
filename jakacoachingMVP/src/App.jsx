
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import MVPVersion1 from './pages/MVPVersion1'



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='mvpversion1' element={<MVPVersion1/>} />  
      </Routes>    
    </BrowserRouter>

  )
}

export default App
