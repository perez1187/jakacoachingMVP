import React, {useContext} from 'react'
import Range1 from '../../assets/range 1.png'

// css
import './RangeViewerComponentRanges.css'

function RangeViewerComponentRanges() {
  return (
    <div className='RangeViewerComponentRanges'>
      <div >
        <div style={{color:"white"}}> Title Range 1</div>
        <div className='RangeViewerComponentRangesRange' > 
          <img src={Range1} alt="Logo" className='rangeManual'/>
        </div>
      </div>  
      <div> 
        <div style={{color:"white"}}> Title Range 2</div>
        <div className='RangeViewerComponentRangesRange'> 
          <img src={Range1} alt="Logo" className='rangeManual'/>
        </div>
      </div>
    </div>
  )
}

export default RangeViewerComponentRanges