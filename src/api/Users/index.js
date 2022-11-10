import axios from 'axios';

const GATEWAY_URL = "https://fiuber-gateway.herokuapp.com"

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
      'token': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3YjE5MTI0MGZjZmYzMDdkYzQ3NTg1OWEyYmUzNzgzZGMxYWY4OWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY4MDM0ODQzLCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2NjgwMzQ4NDMsImV4cCI6MTY2ODAzODQ0MywiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.On6dcaVudVMcGEOFWga8OHP5_kHIF6_-53NMSWC2ojeAFPrSyMQLiI-vTyD9UuxzhpY_NgA0x6WKtkUDmbHMH4G5NgqYys6GGE8-SaZkbR_8T4Gr_AJxoCDP8fWvzr4cmygo-S1dQSlSCmPB-rZJhWrVGNXQlip1DbGogK6hJS4KvmBeBd7OBo36H5I9wUCak7z6oWUJk79KD1JN6u8exdCNfJv5C0j5_ZLG6H6GBIXnwzU6B0E2ZoeAzBrxXpWoBPSz2iJwRpd52A99v-nvFV36iMPcUamHapxlmBxulo_5Tfni6ho5l9PAMrNnQ6qf0xRlByFtvPLk0yJmO1LkCA'
    }
  }).then(response => {
    setProfile(response.data)
  });
}

export function unblockUser(id, setProfile) {
  axios.post(GATEWAY_URL + "/users/unblock/" + id, {
    headers: {
      'token': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3YjE5MTI0MGZjZmYzMDdkYzQ3NTg1OWEyYmUzNzgzZGMxYWY4OWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY4MDM0ODQzLCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2NjgwMzQ4NDMsImV4cCI6MTY2ODAzODQ0MywiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.On6dcaVudVMcGEOFWga8OHP5_kHIF6_-53NMSWC2ojeAFPrSyMQLiI-vTyD9UuxzhpY_NgA0x6WKtkUDmbHMH4G5NgqYys6GGE8-SaZkbR_8T4Gr_AJxoCDP8fWvzr4cmygo-S1dQSlSCmPB-rZJhWrVGNXQlip1DbGogK6hJS4KvmBeBd7OBo36H5I9wUCak7z6oWUJk79KD1JN6u8exdCNfJv5C0j5_ZLG6H6GBIXnwzU6B0E2ZoeAzBrxXpWoBPSz2iJwRpd52A99v-nvFV36iMPcUamHapxlmBxulo_5Tfni6ho5l9PAMrNnQ6qf0xRlByFtvPLk0yJmO1LkCA'
    }
  }).then(response => {
    setProfile(response.data)
  });
}

export function blockUser(id, setProfile) {
  axios.post(GATEWAY_URL + "/users/block/" + id, {
    headers: {
      'token': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3YjE5MTI0MGZjZmYzMDdkYzQ3NTg1OWEyYmUzNzgzZGMxYWY4OWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY4MDM0ODQzLCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2NjgwMzQ4NDMsImV4cCI6MTY2ODAzODQ0MywiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.On6dcaVudVMcGEOFWga8OHP5_kHIF6_-53NMSWC2ojeAFPrSyMQLiI-vTyD9UuxzhpY_NgA0x6WKtkUDmbHMH4G5NgqYys6GGE8-SaZkbR_8T4Gr_AJxoCDP8fWvzr4cmygo-S1dQSlSCmPB-rZJhWrVGNXQlip1DbGogK6hJS4KvmBeBd7OBo36H5I9wUCak7z6oWUJk79KD1JN6u8exdCNfJv5C0j5_ZLG6H6GBIXnwzU6B0E2ZoeAzBrxXpWoBPSz2iJwRpd52A99v-nvFV36iMPcUamHapxlmBxulo_5Tfni6ho5l9PAMrNnQ6qf0xRlByFtvPLk0yJmO1LkCA'
    }
  }).then(response => {
    setProfile(response.data)
  });
}