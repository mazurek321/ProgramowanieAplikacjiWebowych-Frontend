import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = ({active, setActive}) => {
  return (
    <nav className='flex'>
        <ul>
            <li className={active == "home" && 'active'} onClick={()=>setActive("home")}><Link to="/">Home</Link></li>
            <li className={active == "announcements" && 'active'} onClick={()=>setActive("announcements")}><Link to="/announcements">Announcements</Link></li>
            <li className={active == "users" && 'active'} onClick={()=>setActive("users")}><Link to="/users">Users</Link></li>
            <li className={active == "cart" && 'active'} onClick={()=>setActive("cart")}><Link to="/cart">Cart</Link></li>
        </ul>
        <ul>
            <li><Link to="/authorization/login">Login</Link></li>
            <li><Link to="/authorization/register">Register</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar