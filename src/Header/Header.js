import React from 'react'
import './Header.css'
import { BsBoxArrowRight } from "react-icons/bs";
import {BsJustify} from 'react-icons/bs'
import {useNavigate } from 'react-router-dom';

function Header({OpenSidebar}) {
    const Navigate = useNavigate()

    const handleLogout=()=>{
        localStorage.clear()
        Navigate('/')
    }

  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>Personal Finance Managent</div>
        <div className='header-right'>
        <BsBoxArrowRight onClick={handleLogout} />
        </div>
    </header>
  )
}

export default Header