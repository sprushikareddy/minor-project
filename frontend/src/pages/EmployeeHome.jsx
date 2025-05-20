/*import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeHome = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [requests, setRequests] = useState([]);

  // Fetch pending outpasses for warden
  const fetchPendingOutpasses = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/outpass/pending-warden', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRequests(res.data);
    } catch (err) {
      console.error('Error fetching pending outpasses:', err);
      alert('❌ Could not fetch pending outpasses');
    }
  }, [token]);

  // Approve request
  const handleApprove = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/outpass/approve-warden/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Outpass approved ✅');
      fetchPendingOutpasses(); // Refresh list
    } catch (err) {
      console.error('Approval failed:', err);
      alert('Failed to approve ❌');
    }
  };

  useEffect(() => {
    if (!token) {
      alert('You must login first!');
      navigate('/');
    } else {
      fetchPendingOutpasses();
    }
  }, [navigate, token, fetchPendingOutpasses]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="min-h-screen p-8 bg-green-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">
          Welcome, {user?.name || 'Employee'} 🧑‍💼
        </h1>
        <button
          onClick={handleLogout}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Logout
        </button>
      </div>

      <h2 className="text-xl font-semibold text-green-700 mb-4">📄 Pending Outpasses</h2>
      {requests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li
              key={req._id}
              className="bg-white shadow-md p-4 rounded border border-green-200"
            >
              <p><strong>Student:</strong> {req.studentId?.name } ({req.studentId?.rollno})</p>
              <p><strong>From:</strong> {new Date(req.fromDate).toLocaleDateString()}</p>
              <p><strong>To:</strong> {new Date(req.toDate).toLocaleDateString()}</p>
              <p><strong>Reason:</strong> {req.reason}</p>
              <p><strong>Destination:</strong> {req.destination}</p>
              <button
                onClick={() => handleApprove(req._id)}
                className="mt-2 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeHome;*/

import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/employeehome.css';

const EmployeeHome = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [requests, setRequests] = useState([]);

  // Fetch pending outpasses for warden
  const fetchPendingOutpasses = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/outpass/pending-warden', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRequests(res.data);
    } catch (err) {
      console.error('Error fetching pending outpasses:', err);
      alert('❌ Could not fetch pending outpasses');
    }
  }, [token]);

  // Approve request
  const handleApprove = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/outpass/approve-warden/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Outpass approved ✅');
      fetchPendingOutpasses(); // Refresh list
    } catch (err) {
      console.error('Approval failed:', err);
      alert('Failed to approve ❌');
    }
  };

  // Reject request
  const handleReject = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/outpass/reject-warden/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Outpass rejected ❌');
      fetchPendingOutpasses(); // Refresh list
    } catch (err) {
      console.error('Rejection failed:', err);
      alert('Failed to reject ❌');
    }
  };

  useEffect(() => {
    if (!token) {
      alert('You must login first!');
      navigate('/');
    } else {
      fetchPendingOutpasses();
    }
  }, [navigate, token, fetchPendingOutpasses]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="employee-home">
      <div className="header">
        <h1 className="header-title">
          Welcome, {user?.name || 'Employee'} 
        </h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <h2 className="section-title">📄 Pending Outpasses</h2>
      {requests.length === 0 ? (
        <p className="no-requests">No pending requests.</p>
      ) : (
        <ul className="requests-list">
          {requests.map((req) => (
            <li key={req._id} className="request-item">
              <p>
                <strong>Student:</strong> {req.studentId?.name} ({req.studentId?.rollno})
              </p>
              <p>
                <strong>From:</strong> {new Date(req.fromDate).toLocaleDateString()}
              </p>
              <p>
                <strong>To:</strong> {new Date(req.toDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Reason:</strong> {req.reason}
              </p>
              <p>
                <strong>Destination:</strong> {req.destination}
              </p>
              <div className="button-group">
                <button
                  onClick={() => handleApprove(req._id)}
                  className="approve-button"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(req._id)}
                  className="reject-button"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeHome;

