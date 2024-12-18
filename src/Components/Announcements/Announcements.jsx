import React from 'react'
import "./Announcements.css"
import Navbar from '../Navbar/Navbar'

const Announcements = () => {
  const displayAnnouncement = () => {
    return(
      <div className='announcement'>
        <h3>Title</h3>
        <p>Description</p>
        <p>Amount: <span>0</span></p>
        <p>Cost: <span>0 zł</span></p>
        <div className="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }


  return (
    <div className='Announcements container'>
      <Navbar active={"announcements"}/>
      {displayAnnouncement()}
    </div>
  )
}

export default Announcements