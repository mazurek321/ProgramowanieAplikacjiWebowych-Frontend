import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Authorization = () => {
  return (
    <div>
      <Link to="/">Go to home page</Link>

      <Outlet/>
    </div>
    
  )
}

export default Authorization