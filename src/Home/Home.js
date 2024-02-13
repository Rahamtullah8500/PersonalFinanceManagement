import React, { useEffect, useState } from 'react'
import './Home.css'
import {useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
    const Navigate = useNavigate()
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    useEffect(() => {
        if (localStorage.getItem('userDetails') === null) {
            Navigate('/')
        }
    },[])

 

  return (
    <div className='home-page-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Dashboard/>
    </div>
  )
}

export default Home