// src/components/auth/Register.jsx

/*
import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/register.css'; // Import your CSS properly
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    password: '',
    role: 'student',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      
      if (response && response.data) {
        console.log('Registration Success:', response.data);
        alert('Registration successful! 🎉');
      } else {
        console.error('Empty response from backend');
        alert('Registration failed. Server error.');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Registration failed 😔');
    }
  };*/
  

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log('Registration Success:', response.data);
      alert('Registration successful! 🎉');
    } catch (error) {
      console.error('Registration Error:', error.response.data);
      alert('Registration failed 😔');
    }
  };*/
  /*

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <p>Already have an account? <Link to="/">Login</Link></p>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="rollno"
          name="rollno"
          placeholder="rollno"
          value={formData.rollno}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="warden">Warden</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;*/


// src/components/auth/Register.jsx

import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/register.css'; // Make sure path is correct
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    password: '',
    role: 'student',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData); // small 'r' in 'register'
      console.log('Registration Success:', response.data);
      alert('Registration successful! 🎉');
      navigate('/'); // after register, go back to login
    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message);
      alert('Registration failed 😔');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <p>Already have an account? <Link to="/">Login</Link></p>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text" // ✅ (Corrected here — was wrong before)
          name="rollno"
          placeholder="Roll Number"
          value={formData.rollno}
          onChange={handleChange}
          required
        />

{formData.role === 'parent' && (
  <input
    type="text"
    name="mobile"
    placeholder="Mobile Number"
    value={formData.mobile || ''}
    onChange={handleChange}
    required
  />
)}


        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="employee">Employee</option> {/* ✅ Added */}
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

