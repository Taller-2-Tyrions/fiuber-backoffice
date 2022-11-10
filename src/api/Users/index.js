import axios from 'axios';

const GATEWAY_URL = "https://fiuber-gateway.herokuapp.com"

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3YjE5MTI0MGZjZmYzMDdkYzQ3NTg1OWEyYmUzNzgzZGMxYWY4OWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY4MDUxNzU3LCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2NjgwNTE3NTcsImV4cCI6MTY2ODA1NTM1NywiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MNrZxWUTok3sBdfbc7Lj1zdn2kaljiKUIANJp9BOTvVNzeeqdnQvNLK5Je6Q7UFhtP53fuaAoTPahhHhGrke6Y1cuKpFboigNxHpNCWJwkAyFUupxhj_jQwXOs9p278rtvjb0RXv6gDJBSHxN2xRb84QfvgkllQ19tZ9xn4PIKiO33DzQIQwIkpttBWGIyA-PA3dL8WOtQGHRa4555Tszjtidz9iV5uD-4PbpSsmn1LUg59SHm082Ugy26iCCCjZ57I5-sO3AmgQbzTu-jZjWk-pUnoSzBGwL3Cvwm7_FYjV2LM6C6rdop6rWtrW1_1WvFiY7aoHB2bY1cKlgG1_WQ'

export function getUsers(setUsers) {
  axios.get(GATEWAY_URL + "/admin/users", {
    headers: {
      'token': token
    }
  }).then(response => {
    setUsers(response.data)
  });
}


export function getUserProfile(id, setProfile) {
  axios.get(GATEWAY_URL + "/users/" + id, {
    headers: {
      'token': token
    }
  }).then(response => {
    setProfile(response.data)
  });
}

export function unblockUser(id, setProfile) {
  axios.post(GATEWAY_URL + "/admin/unblock/" + id, {},  {
    data: {},
    headers: {
      'token': token
    }
  }).then(response => {
    getUserProfile(id, setProfile)
  });
}

export function blockUser(id, setProfile) {
  axios.post(GATEWAY_URL + "/admin/block/" + id, {}, {
    headers: {
      'token': token
    }
  }).then(response => {
    getUserProfile(id, setProfile)
  });
}