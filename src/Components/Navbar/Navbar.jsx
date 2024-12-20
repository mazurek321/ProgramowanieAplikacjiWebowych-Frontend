import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext/UserContext'

const Navbar = ({active}) => {

  const {user} = useContext(UserContext);

  return (
    <nav className='flex'>
        <ul>
            <li className={active == "home" ? 'active' : ''}><Link to="/">Home</Link></li>
            <li className={active == "announcements" ? 'active' : ''}><Link to="/announcements">Announcements</Link></li>
            <li className={active == "users" ? 'active' : ''}><Link to="/users">Users</Link></li>
            <li className={active == "cart" ? 'active' : ''}><Link to="/cart">Cart</Link></li>
        </ul>
        <ul>
            {user == null ? 
            <>
             <li><Link to="/authorization/login">Login</Link></li>
             <li><Link to="/authorization/register">Register</Link></li>
            </>
            :
            <>
              <li>{user.name.value}</li>
              <li>{user.lastName.value}</li>
              <li><Link to="/logout">LOGOUT</Link></li>
            </>  
          }
           
        </ul>
    </nav>
  )
}

export default Navbar