import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Register = () => {
  const {register} = useContext(UserContext)
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    address: null,
    location: null,
    postCode: null,
    phone: null
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', registerData);
    register(registerData)
    
  };

  return (
    <div className="Register container">
      <p><Link to="/authorization/login">Login now</Link></p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={registerData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={registerData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={registerData.lastname}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={registerData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={registerData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={registerData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={registerData.location}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Post Code"
          name="postCode"
          value={registerData.postCode}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={registerData.phone}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
