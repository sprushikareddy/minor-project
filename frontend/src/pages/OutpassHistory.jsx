/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

const OutpassHistory = () => {
  const [outpasses, setOutpasses] = useState([]);
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
  });

  //const navigate = useNavigate();

  useEffect(() => {
    fetchOutpasses(); // Load all on mount
  }, []);

  const fetchOutpasses = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/outpass/my-outpasses', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOutpasses(res.data || []);
    } catch (err) {
      alert('Failed to fetch outpass history');
    }
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/outpass/filter', filters, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOutpasses(res.data || []);
    } catch (err) {
      alert('❌ Failed to apply filters');
    }
  };

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">📜 Outpass History</h2>

        <form onSubmit={handleFilter} className="flex flex-wrap gap-4 justify-center mb-6">
          <input
            type="date"
            name="fromDate"
            value={filters.fromDate}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="date"
            name="toDate"
            value={filters.toDate}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>

        {outpasses.length === 0 ? (
          <p className="text-center text-gray-500">No outpass records found.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2 border">From Date</th>
                <th className="p-2 border">To Date</th>
                <th className="p-2 border">Reason</th>
                <th className="p-2 border">Place</th>
              </tr>
            </thead>
            <tbody>
              {outpasses.map((op, idx) => (
                <tr key={idx} className="bg-gray-50 even:bg-gray-100">
                  <td className="p-2 border text-center">{op.fromDate?.split('T')[0]}</td>
                  <td className="p-2 border text-center">{op.toDate?.split('T')[0]}</td>
                  <td className="p-2 border text-center">{op.reason}</td>
                  <td className="p-2 border text-center">{op.destination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OutpassHistory;*/

/*import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OutpassHistory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fromDate, toDate } = location.state || {};
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        alert('Please login first!');
        navigate('/');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/outpass/my-outpasses', {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Filter history by date range
        const filtered = res.data.filter((item) => {
          const from = new Date(fromDate);
          const to = new Date(toDate);
          const entryDate = new Date(item.fromDate);
          return entryDate >= from && entryDate <= to;
        });

        setHistory(filtered);
      } catch (err) {
        console.error('Error fetching history:', err);
        alert('Failed to load outing history');
      }
    };

    if (fromDate && toDate) {
      fetchHistory();
    }
  }, [fromDate, toDate, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">📜 Outing History</h2>

        <p className="text-gray-600 mb-4">
          Showing history from <strong>{fromDate}</strong> to <strong>{toDate}</strong>
        </p>

        {history.length > 0 ? (
          <ul className="space-y-4">
            {history.map((entry, index) => (
              <li
                key={index}
                className="border p-4 rounded-lg shadow-sm bg-gray-50 text-gray-700"
              >
                <p><strong>From:</strong> {entry.fromDate}</p>
                <p><strong>To:</strong> {entry.toDate}</p>
                <p><strong>Reason:</strong> {entry.reason}</p>
                <p><strong>Place:</strong> {entry.destination}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No history found for the selected dates.</p>
        )}
      </div>
    </div>
  );
};

export default OutpassHistory;*/
/*
import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';




const OutpassHistory = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first!');
      return;
    }

    try {
      const res = await axios.get('http://localhost:5000/api/outpass/my-outpasses', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const filtered = res.data.filter((item) => {
        const from = new Date(fromDate);
        const to = new Date(toDate);
        const entryDate = new Date(item.fromDate);
        return entryDate >= from && entryDate <= to;
      });

      setHistory(filtered);
    } catch (err) {
      console.error('Error fetching history:', err);
      alert('Failed to load outing history');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fromDate || !toDate) {
      alert('Please select both dates');
      return;
    }
    fetchHistory();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">📜 Outing History</h2>

        
        <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              Submit 
            </button>
          </div>
        </form>

        {/* History Results *//*
        {history.length > 0 ? (
          <ul className="space-y-4">
            {history.map((entry, index) => (
              <li key={index} className="border p-4 rounded-lg shadow-sm bg-gray-50 text-gray-700">
                <p><strong>From:</strong> {entry.fromDate}</p>
                <p><strong>To:</strong> {entry.toDate}</p>
                <p><strong>Reason:</strong> {entry.reason}</p>
                <p><strong>Place:</strong> {entry.destination}</p>

                {entry.wardenApproved && (
  <div className="mt-4">
    <p className="text-sm text-green-600 mb-1">✅ Warden Approved - QR Code:</p>
    <QRCode
      value={JSON.stringify({
        id: entry._id,
        from: entry.fromDate,
        to: entry.toDate,
        destination: entry.destination,
      })}
      size={80}
    />
  </div>
)}

              </li>
              

            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">No history found for the selected dates.</p>
        )}




      </div>
    </div>
  );
};

export default OutpassHistory;
*/

import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import '../styles/OutpassHistory.css';

const OutpassHistory = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first!');
      return;
    }

    try {
      const res = await axios.get(
        'http://localhost:5000/api/outpass/my-outpasses',
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const filtered = res.data.filter((item) => {
        const from = new Date(fromDate);
        const to = new Date(toDate);
        const entryDate = new Date(item.fromDate);
        return entryDate >= from && entryDate <= to;
      });

      setHistory(filtered);
    } catch (err) {
      console.error('Error fetching history:', err);
      alert('Failed to load outing history');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fromDate || !toDate) {
      alert('Please select both dates');
      return;
    }
    fetchHistory();
  };

  return (
    <div className="history-container">
      <div className="history-card">
        <h2 className="history-title"> Outing History</h2>

        <form onSubmit={handleSubmit} className="history-filter">
          <div className="filter-group">
            <label>From Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              required
            />
          </div>

          <div className="filter-group">
            <label>To Date</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="filter-btn">
            Submit
          </button>
        </form>

        {history.length > 0 ? (
          <ul className="history-list">
            {history.map((req) => (
              <li key={req._id} className="history-item">
                <div className="item-info">
                  <p><strong>From:</strong> {new Date(req.fromDate).toLocaleDateString()}</p>
                  <p><strong>To:</strong> {new Date(req.toDate).toLocaleDateString()}</p>
                  <p><strong>Reason:</strong> {req.reason}</p>
                  <p><strong>Place:</strong> {req.destination}</p>
                </div>

                {req.wardenApproved && (
                  <div className="qr-section">
                    <p>✅ Approved - Scan QR:</p>
                    <QRCode
                      value={JSON.stringify({
                        id: req._id,
                        from: req.fromDate,
                        to: req.toDate,
                        destination: req.destination,
                      })}
                      size={100}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-data">No history found for the selected dates.</p>
        )}
      </div>
    </div>
  );
};

export default OutpassHistory;