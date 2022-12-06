import axios from 'axios';

const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL

export function getMetrics(setMetrics, accessToken) {
  axios.post(GATEWAY_URL + "/metrics", {}, {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    setMetrics(response.data)
  });
}