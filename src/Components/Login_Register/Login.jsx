import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {email, password};

    try
    {
      const response = await fetch('http://localhost:5050/Users/login', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });

      if(!response.ok){
        const errorData = await response.json();
        setError(errorData)
        console.log(error)
        alert("User not found.");
        return;
      }
      const token = await response.text();
      login(token)
      navigate("/")
    }
    catch(error)
    {
      setError(error)
    }

  }


  return (
    <div className='Login container'>
      <p><Link to="/authorization/register">Register now</Link></p>
      
      <form onSubmit={handleSubmit}>
      <input 
          type="email" 
          placeholder='Email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder='Password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        /> 
        <button type='submit'>Login</button>
      </form>  
    </div>
  )
}

export default Login