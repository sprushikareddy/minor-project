/*
import React, { useState } from 'react';
import '../../styles/login.css';  // Make sure this path is correct
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ rollno: '', password: '' });
  const [student, setStudent] = useState({ rollno: '', password: '' });
  const [parent, setParent] = useState({ rollno: '', mobile: '' });
  const [rollno, setRollno] = useState('');
  const [mobile, setMobile] = useState('');


  const handleEmployeeSubmit =async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5000/api/auth/employee-login', employee);
        console.log('Employee Login Success:', res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        alert('Employee login successful ✅');
        navigate('/employee-home');

      } catch (error) {
        console.error('Employee Login Failed:', error);
        alert('Employee login failed ❌');
      }
    //console.log('Employee Login:', employee);
    // Axios request here for employee login
  };

  const handleStudentSubmit = async(e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5000/api/auth/student-login', student);
        console.log('Student Login Success:', res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        alert('Student login successful ✅');
        navigate('/student-home');

      } catch (error) {
        console.error('Student Login Failed:', error);
        alert('Student login failed ❌');
      }
    //console.log('Student Login:', student);
    // Axios request here for student login
  };

  const handleParentSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(rollno, mobile);
        const response = await axios.post('/api/auth/parent-login', {
            rollno,
            mobile,
          });
          
        const res = await axios.post('http://localhost:5000/api/auth/parent-login', parent);
        console.log('Parent Login Success:', res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        alert('Parent login successful ✅');
        navigate('/parent-home');

      } catch (error) {
        console.error('Parent Login Failed:', error);
        alert('Parent login failed ❌');
      }
    //console.log('Parent Login:', parent);
    // Axios request here for parent login
  };

  return (

    <div className="login-main-container">
      <div className="login-card employee-login">
        <h2>Employee Login</h2>
        <form onSubmit={handleEmployeeSubmit}>
          <input
            type="text"
            placeholder="User Name"
            value={employee.rollno}
            onChange={(e) => setEmployee({ ...employee, rollno: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={employee.password}
            onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="login-card student-login">
        <h2>Student Login</h2>
        <form onSubmit={handleStudentSubmit}>
          <input
            type="text"
            placeholder="User Name"
            value={student.rollno}
            onChange={(e) => setStudent({ ...student, rollno: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={student.password}
            onChange={(e) => setStudent({ ...student, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="login-card parent-login">
        <h2>Parent Login</h2>
        <form onSubmit={handleParentSubmit}>
          <input
            type="text"
            placeholder="Roll No"
            value={parent.rollno}
            onChange={(e) => setParent({ ...parent, rollno: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Mobile No"
            value={parent.mobile}
            onChange={(e) => setParent({ ...parent, mobile: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
        
      </div>
      

      <div><p>Don't have an account? <Link to="/register">Register</Link></p></div>
    </div>

  );
  
};

export default Login;*/

import React, { useState } from 'react';
import '../../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({ rollno: '', password: '' });
  const [student, setStudent] = useState({ rollno: '', password: '' });
  const [parent, setParent] = useState({ rollno: '', mobile: '' });

  const handleEmployeeSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/employee-login', employee);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('Employee login successful ✅');
      navigate('/employee-home');
    } catch (error) {
      console.error('Employee Login Failed:', error);
      alert('Employee login failed ❌');
    }
  };

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/student-login', student);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('Student login successful ✅');
      navigate('/student-home');
    } catch (error) {
      console.error('Student Login Failed:', error);
      alert('Student login failed ❌');
    }
  };

  const handleParentSubmit = async (e) => {
    e.preventDefault();
    console.log('Logging parent input:', parent);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/parent-login',  {
        rollno: parent.rollno,
        mobile: parent.mobile,
      });
      console.log('Parent Login Success:', res.data);

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('Parent login successful ✅');
      navigate('/parent-home');
    } catch (error) {
      console.error('Parent Login Failed:', error);
      alert('Parent login failed ❌');
    }
  };

  return (
    <div className="login-main-container">
      <div className="login-card employee-login">
        <h2>Employee Login</h2>
        <form onSubmit={handleEmployeeSubmit}>
          <input
            type="text"
            placeholder="User Name"
            value={employee.rollno}
            onChange={(e) => setEmployee({ ...employee, rollno: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={employee.password}
            onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="login-card student-login">
        <h2>Student Login</h2>
        <form onSubmit={handleStudentSubmit}>
          <input
            type="text"
            placeholder="User Name"
            value={student.rollno}
            onChange={(e) => setStudent({ ...student, rollno: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={student.password}
            onChange={(e) => setStudent({ ...student, password: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="login-card parent-login">
        <h2>Parent Login</h2>
        <form onSubmit={handleParentSubmit}>
          <input
            type="text"
            placeholder="Roll No"
            value={parent.rollno}
            onChange={(e) => setParent({ ...parent, rollno: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Mobile No"
            value={parent.mobile}
            onChange={(e) => setParent({ ...parent, mobile: e.target.value })}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <div>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;




