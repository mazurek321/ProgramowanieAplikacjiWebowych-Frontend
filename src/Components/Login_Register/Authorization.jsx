import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Authorization = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    var token = localStorage.getItem("token")
    if(token != null) navigate("/");
  }, [])
  
  return (
    <div>
      <Link to="/">Go to home page</Link>

      <Outlet/>
    </div>
    
  )
}

export default Authorization