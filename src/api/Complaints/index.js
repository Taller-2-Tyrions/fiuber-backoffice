import axios from 'axios';

const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL

export function getComplaints(setComplaints, accessToken) {
  axios.get(GATEWAY_URL + "/admin/complaints", {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    console.log(response.data)
    setComplaints(response.data)
  });
}
  