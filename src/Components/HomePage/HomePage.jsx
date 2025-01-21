import React, { useContext, useState } from 'react'
import "./HomePage.css"
import Navbar from '../Navbar/Navbar'
import { UserContext } from '../UserContext/UserContext'

const HomePage = () => {  
  const {user} = useContext(UserContext)
  return (
    <div className='homePage container'>
        <Navbar active={"home"}/>
        {user == null ? <p>Log in to see your profile.</p> :
        <>
          <div className="user-data">
            <h3>Your information</h3>
            <p>Name: <span>{user.name.value}</span></p>
            <p>Lastname: <span>{user.lastName.value}</span></p>
            <p>Email: <span>{user.email.value}</span></p>
            <p><b>Role: <span>{user.role.value}</span></b></p>
            <p>Address: <span>{user.address == null ? "no respond" : user.address.value}</span></p>
            <p>Location: <span>{user.location == null ? "no respond" : user.location.value}</span></p>
            <p>PostCode: <span>{user.postCode == null ? "no respond" : user.postCode.value}</span></p>
            <p>Phone: <span>{user.phone == null ? "no respond" : user.phone.value}</span></p>
            <p>CreatedAt: <span>{user.createdAt}</span></p>
          </div>
        </>
        }
    </div>
  )
}

export default HomePage