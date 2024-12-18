import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='Register container'>
      <p><Link to="/authorization/login">Login now</Link></p>
      
      <form>
        <input type="text" placeholder='email'/>  
        <input type="text" placeholder='name'/>  
        <input type="text" placeholder='lastname'/>  
        <input type="password" placeholder='password'/>  
        <input type="password" placeholder='confirmPassword'/>  
        <input type="text" placeholder='address'/>  
        <input type="text" placeholder='location'/>  
        <input type="text" placeholder='postCode'/>  
        <input type="text" placeholder='phone'/>  
        <button type='submit'>Register</button>
      </form>  
    </div>
  )
}

export default Register