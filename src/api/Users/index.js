import axios from 'axios';

const GATEWAY_URL = "https://fiuber-gateway.herokuapp.com"

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3YjE5MTI0MGZjZmYzMDdkYzQ3NTg1OWEyYmUzNzgzZGMxYWY4OWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY4MDQzODk5LCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2NjgwNDM4OTksImV4cCI6MTY2ODA0NzQ5OSwiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.G-e-qfYKa6IYENOprYZnPc8RsjxEu9VfIrWaILLBsCvtcoGeeA3SixZ2Km_CQ33QB-3SChNHtukUjKbIlpl5SUaCdJ6ukpunXROWJ4J_5HE5sFuvzfMT6Jy4BsyhXC1LkVOvv7Qa1m7fDZPFeGwciPqRpr6o78EFueD0StT5nh2DoSaUqfV4_JPBvTVp6PHzPgIKDzDTqjlT-s41NWN5preOMizeL6cxk9Y8F39WeljJ_utT1juW_84rFxEGAj6K4H6vxQ2hCvO50DdxJW9eP6FCLRep2zSt3up_-3lRA9ev7XxT335KBaNBAjU80uGXjqaoBqPqlriRqdfRfSdghw'

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
  axios.post('https://fiuber-gateway.herokuapp.com/admin/register/4ubbG910SyTA4iVCXDxdKmBwrPB2', {
    headers: {
      'token': token
    }
  }).then(response => {
    setProfile(response.data)
  });
}

export function blockUser(id, setProfile) {
  axios.post(GATEWAY_URL + "/admin/block/" + id, {
    headers: {
      'token': token
    }
  }).then(response => {
    setProfile(response.data)
  });
}