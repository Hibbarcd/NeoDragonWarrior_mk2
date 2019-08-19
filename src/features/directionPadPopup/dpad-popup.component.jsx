import React from 'react'
import  './dpad-popup.style.scss'


const DpadPopup = () => (
    <div className='d-pad-reveal'>            
        <div className='direction-pad'>
                <button className='button' value='West'  id='left'   >
                LEFT
                </button>
                <button className='button' value='North'  id='up'>
                UP
                </button>

                <button className='button' value='East'  id='right'  >
                RIGHT
                </button>

                <button className='button' value='South'  id='down'  >
                DOWN
                </button>
        </div>
    </div>
)
export default DpadPopup