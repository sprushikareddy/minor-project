
/*
// src/pages/ApplyOutpass.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//const token = localStorage.getItem('token');

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
};


const ApplyOutpass = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    reason: '',
    place: '',
});

   const handleSubmit = async (e) => {
      e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:5000/api/outpass/create', 
        //{ fromDate, toDate, reason, destination: place }, 
        {
            fromDate: formData.fromDate,
            toDate: formData.toDate,
            reason: formData.reason,
            destination: formData.place,
          },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('✅ Outpass submitted successfully!');
      navigate('/student-home'); // After success, redirect
    } catch (error) {
      console.error('Outpass submission error:', error);
      alert('❌ Failed to submit outpass!');
    }
  };
  

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login first!');
        navigate('/');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/outpass/create',
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data) {
        alert('✅ Outpass Request Submitted Successfully!');
        navigate('/student-home');
      }
    } catch (error) {
      console.error('Outpass Submission Failed:', error);
      alert('❌ Failed to submit outpass!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-300 to-purple-400 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          📝 Request Outpass
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-600 font-semibold">From Date</label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-semibold">To Date</label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-semibold">Reason</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              placeholder="Eg: Going home, function..."
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-semibold">Place</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              placeholder="Eg: Bangalore, Hyderabad..."
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105"
          >
            Submit 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyOutpass;*/

/*
// src/pages/ApplyOutpass.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ApplyOutpass = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    reason: '',
    place: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first!');
      navigate('/');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/outpass/create',
        {
          fromDate: formData.fromDate,
          toDate: formData.toDate,
          reason: formData.reason,
          destination: formData.place, // destination maps to place
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        alert('✅ Outpass Request Submitted Successfully!');
        navigate('/student-home');
      }
    } catch (error) {
      console.error('Outpass Submission Failed:', error.response?.data || error.message);
      alert('❌ Failed to submit outpass!');
    }
  };

 
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-300 to-purple-400 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          📝 Request Outpass
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-600 font-semibold">From Date</label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-semibold">To Date</label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-semibold">Reason</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              placeholder="Eg: Going home, function..."
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-semibold">Place</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              placeholder="Eg: Bangalore, Hyderabad..."
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-transform transform hover:scale-105"
          >
            Submit 🚀
          </button>
        </form>
      </div>
    </div>
    
  );

};




export default ApplyOutpass;
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/applyoutpass.css';

const ApplyOutpass = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    reason: '',
    place: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first!');
      navigate('/');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/outpass/create',
        {
          fromDate: formData.fromDate,
          toDate: formData.toDate,
          reason: formData.reason,
          destination: formData.place,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        alert('✅ Outpass Request Submitted Successfully!');
        navigate('/student-home');
      }
    } catch (error) {
      console.error('Outpass Submission Failed:', error.response?.data || error.message);
      alert('❌ Failed to submit outpass!');
    }
  };

  return (
    <div className="outpass-container">
      <div className="outpass-card">
        <h2 className="outpass-title"> Request Outpass</h2>
        <form onSubmit={handleSubmit} className="outpass-form">
          <div className="form-group">
            <label>From Date</label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>To Date</label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Reason</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              placeholder="Eg: Going home, function..."
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Place</label>
            <input
              type="text"
              name="place"
              value={formData.place}
              placeholder="Eg: Bangalore, Hyderabad..."
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyOutpass;

