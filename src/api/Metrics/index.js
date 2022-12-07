import axios from 'axios';

const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL

export function getMetrics(setMetrics, accessToken) {
  voyages = {}
  users = {}
  payments = {}
  axios.post(GATEWAY_URL + "/metrics/voyages", {}, {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    voyages = response.data
  });

  axios.post(GATEWAY_URL + "/metrics/users", {}, {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    users = response.data
  });

  axios.post(GATEWAY_URL + "/metrics/payments", {}, {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    payments = response.data
  });

  setMetrics(Object.assign({}, voyages, users, payments);
}