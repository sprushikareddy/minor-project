// src/App.js
/*
import React from 'react';
import Register from './components/auth/Register';
import './styles/login.css';

function App() {
  return (
    <div>
      <Register/>  
    </div>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './styles/login.css';     // Login page styles
import './styles/register.css';  // Register page styles (create this file if not already)
import StudentHome from './pages/StudentHome';
import EmployeeHome from './pages/EmployeeHome';
import ParentHome from './pages/ParentHome';
import ApplyOutpass from './pages/ApplyOutpass';
import OutpassHistory from './pages/OutpassHistory';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/apply-outpass" element={<ApplyOutpass />} />
        <Route path="/employee-home" element={<EmployeeHome />} />
        <Route path="/parent-home" element={<ParentHome />} />
        <Route path="/outpass-history" element={<OutpassHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
