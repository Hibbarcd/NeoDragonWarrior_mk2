import React from 'react'
import { connect } from 'react-redux'
import  DpadIcon  from '../d-padIcon/d-padIcon.component'
import DpadPopup from '../directionPadPopup/dpad-popup.component';
import { ReactComponent as Logo } from '../../data/imageAssets/crownIcon.svg'
import './header.style.scss'

// import { auth } from '../../firebase/firebase.utils'

const Header = ({ hidden }) => (
    <div className='header'>
            <Logo className= 'logo' />
        <div className= 'options'>
            <div className='option'>SHOP</div>
            <div className='option'>SHOP</div>
            <div className='option'>SHOP</div>
            <DpadIcon />
        </div>

        {  hidden ? null : <DpadPopup />  }

    </div>
)

const mapStateToProps = ({ hidden:{ hidden } }) =>  ({
    hidden
})

export default connect(mapStateToProps)(Header)