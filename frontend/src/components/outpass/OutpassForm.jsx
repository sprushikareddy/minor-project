import React, { useState } from 'react';
import axios from 'axios';

const OutpassForm = () => {
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    reason: '',
    place: '',
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
      const token = localStorage.getItem('token');

      await axios.post('http://localhost:5000/api/outpass/create', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('✅ Outpass request submitted successfully!');
    } catch (error) {
      console.error('❌ Error submitting outpass:', error);
      alert('Failed to submit outpass request.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">From Date</label>
        <input
          type="date"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">To Date</label>
        <input
          type="date"
          name="toDate"
          value={formData.toDate}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Reason</label>
        <input
          type="text"
          name="reason"
          placeholder="Enter Reason"
          value={formData.reason}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">Destination</label>
        <input
          type="text"
          name="place"
          placeholder="Where are you going?"
          value={formData.place}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default OutpassForm;
