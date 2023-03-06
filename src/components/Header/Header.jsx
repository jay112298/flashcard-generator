import React from 'react'
import { HeaderBar } from './Header.st'
import redF from '../../assets/red_f.png'
import { BsPersonCircle } from 'react-icons/bs'

const Header = () => {
  return (
    <HeaderBar>
        <div className="logo-section">
            <div className="logo"><img src={redF} alt="F" height={50}/></div>
            <div className="text">lashCard</div>
        </div>
        <div className="icon-section">
            <BsPersonCircle size={30} color='#DA1124'/>
        </div>
    </HeaderBar>
  )
}

export default Header