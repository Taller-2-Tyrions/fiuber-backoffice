import axios from 'axios';

const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL

export function getAccessMetrics(setAccessMetrics, accessToken) {
  axios.get(GATEWAY_URL + "/metrics/users", {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    setAccessMetrics(response.data)
  });
}

export function getVoyagesMetrics(setVoyagesMetrics, accessToken) {
  axios.get(GATEWAY_URL + "/metrics/voyages", {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    setVoyagesMetrics(response.data)
  });
}

export function getPaymentsMetrics(setPaymentsMetrics, accessToken) {
  axios.get(GATEWAY_URL + "/metrics/payments", {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    setPaymentsMetrics(response.data)
  });
}
