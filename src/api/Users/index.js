import axios from 'axios';

const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL


export function getUsers(setUsers, accessToken) {
  axios.get(GATEWAY_URL + "/admin/users", {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    setUsers(response.data)
  });
}


export function getUserProfile(id, setProfile, accessToken) {
  console.log("Pidiendo User "+accessToken);
  axios.get(GATEWAY_URL + "/users/" + id, {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    setProfile(response.data)
  });
}

export function unblockUser(id, setProfile, accessToken) {
  axios.post(GATEWAY_URL + "/admin/unblock/" + id, {},  {
    data: {},
    headers: {
      'token': accessToken
    }
  }).then(response => {
    getUserProfile(id, setProfile, accessToken)
  });
}

export function blockUser(id, setProfile, accessToken) {
  axios.post(GATEWAY_URL + "/admin/block/" + id, {}, {
    headers: {
      'token': accessToken
    }
  }).then(response => {
    getUserProfile(id, setProfile, accessToken)
  });
}