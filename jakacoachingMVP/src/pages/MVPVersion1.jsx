import React from 'react'
import RangeViewerComponent from '../components/RangeViewerComponent/RangeViewerComponentBB'
import RangeViewerComponentPreflop from '../components/RangeViewerComponentPreflop/RangeViewerComponentPreflop'
import RangeViewerComponentRanges from '../components/RangeViewerComponentRanges/RangeViewerComponentRanges'

import './MVPVersion1.css'

function MVPVersion1() {
  return (
    <div className='ver1AppBox'> 
      <RangeViewerComponent/> 
      <RangeViewerComponentPreflop/>
      <RangeViewerComponentRanges/>
    </div>
  )
}

export default MVPVersion1