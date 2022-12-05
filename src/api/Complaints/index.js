import axios from 'axios';

const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL

export function getComplaints(setUsers, accessToken) {
  axios.get(GATEWAY_URL + "/admin/complaints", {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    setUsers(response.data)
  });
}
  