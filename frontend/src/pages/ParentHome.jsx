/*import React from 'react';
import { useNavigate } from 'react-router-dom';

const ParentHome = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };*/


  /*
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ParentHome = () => {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        Welcome, {user?.name || 'Parent'} 👨‍👩‍👧
      </h1>
      <button 
        onClick={handleLogout}
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default ParentHome;*/

/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParentHome = () => {
  const [requests, setRequests] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/outpass/parent-pending', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const pending = res.data.filter(req => req.status === 'Pending');
        setRequests(pending);
        setRequests(res.data || []);
      } catch (error) {
        console.error('Error fetching requests:', error);
        alert('Failed to fetch requests');
      }
    };

    fetchRequests();
  }, [token]);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/outpass/parent-approve/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Approved ✅');
      setRequests(prev => prev.filter(r => r._id !== id));
    } catch (error) {
      console.error('Approval error:', error);
      alert('Approval failed ❌');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-6">
      <h2 className="text-3xl font-bold text-center text-orange-700 mb-6">Parent Outpass Requests</h2>
      

      {requests.length === 0 ? (
        <p className="text-center text-gray-700">No pending requests 🎉</p>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {requests.map((req) => (
            <div key={req._id} className="bg-white p-4 rounded-xl shadow-md">
              <p><strong>From:</strong> {req.fromDate}</p>
              <p><strong>To:</strong> {req.toDate}</p>
              <p><strong>Reason:</strong> {req.reason}</p>
              <p><strong>Destination:</strong> {req.destination}</p>
              <button
                onClick={() => handleApprove(req._id)}
                className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ParentHome;
*/


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/parenthome.css';

const ParentHome = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));


  useEffect(() => {
    const fetchRequests = async () => {
      if (!token) {
        alert('Please login first!');
        navigate('/');
        return;
      }
      try {
        const res = await axios.get(
          'http://localhost:5000/api/outpass/parent-pending',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // only keep pending ones
        const pending = res.data.filter(req => req.status === 'Pending');
        setRequests(pending);
      } catch (error) {
        console.error('Error fetching requests:', error);
        alert('Failed to fetch requests');
      }
    };
    fetchRequests();
  }, [token, navigate]);

  const handleApprove = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/outpass/parent-approve/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRequests(r => r.filter(x => x._id !== id));
      alert('✅ Approved');
    } catch (error) {
      console.error('Approval error:', error);
      alert('❌ Approval failed');
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/outpass/parent-reject/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRequests(r => r.filter(x => x._id !== id));
      alert('🚫 Rejected');
    } catch (error) {
      console.error('Rejection error:', error);
      alert('❌ Rejection failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="parent-container">
      <header className="parent-header">
      <h1 className="header-title">
          Welcome, {user?.name || 'Student'} 🎓
        </h1>
        <h2 className="section-title">📄 Pending Outpasses</h2>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>

      {requests.length === 0 ? (
        <p className="no-requests">No pending requests 🎉</p>
      ) : (
        <div className="requests-list">
          {requests.map(req => (
            <div key={req._id} className="request-card">
              <div className="request-info">
              
                      <p><strong>From:</strong> {new Date(req.fromDate).toLocaleDateString()}</p>
                      <p><strong>To:</strong>   {new Date(req.toDate).toLocaleDateString()}</p>
                      <p><strong>Reason:</strong> {req.reason}</p>
                       <p><strong>Destination:</strong> {req.destination}</p>
                 
              </div>
              <div className="request-actions">
                <button
                  onClick={() => handleApprove(req._id)}
                  className="approve-btn"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(req._id)}
                  className="reject-btn"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ParentHome;

