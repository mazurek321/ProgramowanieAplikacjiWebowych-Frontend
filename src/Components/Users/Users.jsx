import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Users.css"
import { Link } from 'react-router-dom'

const Users = () => {
  const displayUser = () => {
    return(
      <tr>
        <td>email</td>
        <td>name</td>
        <td>lastname</td>
        <td>role</td>
        <td><button><Link to="/">View</Link></button><button>Delete</button></td>
      </tr>
    )
  }

  return (
    <div className='Users container'>
      <Navbar active={"users"}/>
      <table>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
        {displayUser()}
      </table>
    </div>
  )
}

export default Users