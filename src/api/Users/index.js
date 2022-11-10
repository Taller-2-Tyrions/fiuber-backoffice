import axios from 'axios';

const GATEWAY_URL = "https://fiuber-gateway.herokuapp.com"

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3YjE5MTI0MGZjZmYzMDdkYzQ3NTg1OWEyYmUzNzgzZGMxYWY4OWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY4MDQ3NTUzLCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2NjgwNDc1NTMsImV4cCI6MTY2ODA1MTE1MywiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.aPlR8sDqsy_h0jiCNxSFkrKY-w45uXBUWsIDvQtzTIStRKVilrQ5xeTOc9PDHUKuv-Fg6JA_WbYzoC5saqnSfKqXLJU0TO6BsSyeBNKodqmT0kshmuGZ3EDz9RYgGg8fGuVOvlv6HjaEGLC6WdYnYbOo9lBCeGM3xojSxemvAuIDvEdVVFos5oYIO3HzKnmFloKdg75a6m_CAVpdAxoNm0msGjV0CrPm254c4Nw2HB95FRrlrSFwtTtFy1SVQswL8xmwIJj0zSfJzWfaI23O24mMPD1zbUSVeiVCCpsAsyfW_YtPHyQvigvBGLddbJkMtyg0441ynmO9cxtoTNdP8w'

export function getUsers() {
  // Aca deberiamos hacer una llamada al gateway
  // Cambiar el nombre de las columnas en modules/Users
  // para que quede bien luego de la llamada.
  
  return [
    {
      key: 1,
      id: '4ubbG910SyTA4iVCXDxdKmBwrPB2',
      name: 'PASAJERO',
      last_name: 'Elmas Capo',
      roles: ['Passenger'],
    },
    {
      key: 2,
      id: 'cmyaQJfWuifQ4KFqBDyymgJRxOG2',
      name: 'CHOFER + PASAJERO',
      last_name: 'Facha',
      roles: ['Passenger', 'Driver'],
    },
    {
      key: 3,
      id: 'f7k2qwtw95hYratm6d5VhsUKN652',
      name: 'ADMIN',
      last_name: 'Facha',
      roles: ['Admin', 'Driver'],
    },
    
  ];
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