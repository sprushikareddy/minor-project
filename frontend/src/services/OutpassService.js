import axios from 'axios';

const API_URL = 'http://localhost:5000/api/outpass';

const submitOutpass = async (outpassData) => {
  const token = localStorage.getItem('token');

  return await axios.post(`${API_URL}/create`, outpassData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default submitOutpass;
