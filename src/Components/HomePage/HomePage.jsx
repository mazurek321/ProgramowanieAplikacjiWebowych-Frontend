import React, { useState } from 'react'
import "./HomePage.css"
import Navbar from '../Navbar/Navbar'

const HomePage = () => {  
  return (
    <div className='homePage container'>
        <Navbar active={"home"}/>
        <h3>Home page</h3>
    </div>
  )
}

export default HomePage