import axios from 'axios';
import { getUserProfile } from '../Users';

const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL


export function registerAdmin(id, setProfile, accessToken) {
  axios.post(GATEWAY_URL + "/admin/register/" + id, {}, {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    getUserProfile(id, setProfile, accessToken)
  });
}
