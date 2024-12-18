import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='Login container'>
      <p><Link to="/authorization/register">Register now</Link></p>
      
      <form>
        <input type="text" placeholder='email'/>  
        <input type="password" placeholder='password'/>  
        <button type='submit'>Login</button>
      </form>  
    </div>
  )
}

export default Login