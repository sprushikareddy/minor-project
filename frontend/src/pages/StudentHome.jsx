/*import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentHome = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('You must login first!');
          navigate('/');
        }
    })
  };*/


  /*
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentHome = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must login first!');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome, {user?.name || 'Student'} 🎓
      </h1>
      <button 
        onClick={handleLogout}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default StudentHome;*/





//import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
/*
const StudentHome = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [history, setHistory] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    //localStorage.clear();
    navigate('/');
  };


    const handleSubmit = (e) => {
      e.preventDefault();
      if (!fromDate || !toDate) {
        alert('Please select both dates');
        return;
      }
      navigate('/outpass-history', {
        state: {
          fromDate,
          toDate,
        },
      });
    };
  
    return (
      <div className="p-6 min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">👋 Welcome, Student</h2>
  */
        /* Outing History Filter Form *//*
        <div className="bg-white p-6 rounded-xl shadow-md max-w-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">📜 View Outing History</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">From Date</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-600">To Date</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="mt-1 w-full p-2 border rounded"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              Submit & View History
            </button>
          </form>
        </div>
      </div>
    );
  };
                             

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleHistorySubmit = async () => {
    // Later: connect with backend
    const dummyHistory = [
      { fromDate: '2025-05-01', toDate: '2025-05-03', reason: 'Marriage', place: 'Hyderabad' },
      { fromDate: '2025-04-10', toDate: '2025-04-12', reason: 'Hospital', place: 'Bangalore' },
    ];
    setHistory(dummyHistory);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must login first!');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-8">
      {/* Header *//*
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome, {user?.name} 🎓
        </h1>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      {/* Options *//*
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 mx-auto">
        <h2 className="text-xl font-semibold text-center mb-4">What would you like to do?</h2>

        <div className="flex flex-col space-y-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="request"
              checked={selectedOption === 'request'}
              onChange={handleOptionChange}
            />
            <span>Request for Outing</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="history"
              checked={selectedOption === 'history'}
              onChange={handleOptionChange}
            />
            <span>Outing History</span>
          </label>
        </div>

        {/* Buttons *//*
        {selectedOption === 'request' && (
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/apply-outpass')}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded"
            >
              Proceed to Request
            </button>
          </div>
        )}

        {selectedOption === 'history' && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold mb-2">Select Dates:</h3>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <button 
              onClick={handleHistorySubmit} 
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded w-full"
            >
              Submit
            </button>

            


            {/* History Results *//*
            <div className="mt-4">
              {history.length > 0 ? (
                <ul className="list-disc list-inside space-y-2">
                  {history.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item.fromDate} ➡ {item.toDate} | {item.reason} | {item.place}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No outings found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );


export default StudentHome;*/



/*
const StudentHome = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first!');
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fromDate || !toDate) {
      alert('Please select both From and To dates');
      return;
    }

    navigate('/outpass-history', {
      state: {
        fromDate,
        toDate,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-8">
      {/* Header 
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome, {user?.name} 🎓
        </h1>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      {/* Apply Outpass Button 
      <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Want to go out?</h2>
        <button
          onClick={() => navigate('/apply-outpass')}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded w-full"
        >
          Request for Outing
        </button>
      </div>

      {/* Outing History Section 
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">📜 View Outing History</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">From Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">To Date</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Submit & View History
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentHome;*/

/*


const StudentHome = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first!');
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleOptionSelect = () => {
    if (selectedOption === 'request') {
      navigate('/apply-outpass');
    } else if (selectedOption === 'history') {
      navigate('/outpass-history');
    } else {
      alert('Please select an option.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome, {user?.name} 🎓
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 mx-auto">
        <div className="space-y-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="option"
              value="request"
              checked={selectedOption === 'request'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Request for Outing</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="option"
              value="history"
              checked={selectedOption === 'history'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>View Outing History</span>
          </label>

          <button
            onClick={handleOptionSelect}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
*/

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StudentHome.css';

const StudentHome = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first!');
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleOptionSelect = () => {
    if (selectedOption === 'request') {
      navigate('/apply-outpass');
    } else if (selectedOption === 'history') {
      navigate('/outpass-history');
    } else {
      alert('Please select an option.');
    }
  };

  return (
    <div className="student-home">
      <div className="student-home-header">
        <h1 className="welcome-text">Welcome, {user?.name} 🎓</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="student-home-content">
        <label>
          <input
            type="radio"
            name="option"
            value="request"
            checked={selectedOption === 'request'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Request for Outing
        </label>

        <label>
          <input
            type="radio"
            name="option"
            value="history"
            checked={selectedOption === 'history'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          View Outing History
        </label>

        <button className="submit-button" onClick={handleOptionSelect}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudentHome;



