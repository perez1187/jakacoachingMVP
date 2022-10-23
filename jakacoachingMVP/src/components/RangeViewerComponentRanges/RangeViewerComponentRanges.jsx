import React, {useContext} from 'react'
import Range1 from '../../assets/range 1.png'

// css
import './RangeViewerComponentRanges.css'

function RangeViewerComponentRanges() {
  return (
    <div className='RangeViewerComponentRanges'>
      <div >
        <div> Title Range 1</div>
        <div className='RangeViewerComponentRangesRange'> 
          <img src={Range1} alt="Logo" />
        </div>
      </div>  
      <div> 
        <div> Title Range 2</div>
        <div className='RangeViewerComponentRangesRange'> range</div>
      </div>
    </div>
  )
}

export default RangeViewerComponentRanges