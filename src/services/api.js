const API_ROOT = `http://localhost:3001/api/v1`;
const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

const login = data => {
  return fetch(`${API_ROOT}/auth`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const getCurrentInvestor = () => {
  return fetch(`${API_ROOT}/current_investor`, {
    headers
  }).then(res => res.json());
};

export const api = {
  auth: {
    login,
    getCurrentInvestor
  }
};
