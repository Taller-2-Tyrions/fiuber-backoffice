import axios from 'axios';

const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL

export function apilogin(mail, password, setAccessToken) {
  console.log("Por hacer login a mail: %s pwd: %s, endpoint: %s", mail, password, GATEWAY_URL + "/login");
  axios.post(GATEWAY_URL + "/login", {
      "email": mail,
      "password": password,
      "device_token": "not valid for admin"
  }).then(response => {
    setAccessToken(response.data.token);
  });
}