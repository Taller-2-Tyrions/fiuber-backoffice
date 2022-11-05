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
      name: 'Mateo',
      last_name: 'Elmas Capo',
      roles: ['Driver', 'Passenger'],
    },
    {
      key: 2,
      id: 'cmyaQJfWuifQ4KFqBDyymgJRxOG2',
      name: 'Ine',
      last_name: 'Facha',
      roles: ['Admin', 'Driver'],
    },
  ];
}


export async function getUserProfile(id) {
  var profile = {}
  console.log(GATEWAY_URL)
  axios.get(GATEWAY_URL + "/users/" + id, {
    headers: {
      'token': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRjMzdkNTkzNjVjNjIyOGI4Y2NkYWNhNTM2MGFjMjRkMDQxNWMxZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY3NjgzMDU1LCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2Njc2ODMwNTUsImV4cCI6MTY2NzY4NjY1NSwiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.t0DsuhQjoLB0w-J4s6uUhY7D071t5Oxui0WQjoP772w8KNzS68GLGzWWcrTF5eGX1HJGqNJP1wBwlyy1sD-s1Du2TDPTUToyidw6FBuxScWdtdGB5Oan7qIbHBUSm4WTFRE3q7O8OrDhq2_ESqEXD1nwJ0kgypt77pbzHspMJaup8r3l-Yt3-WqHYUCzzoI-FGYFJ_RpqzlHfHqmxvZIRRyDC9EKDcHYdMMhfuLGVyLA7LLfOtbCpeu2IjnlkX6h-_IoAKnPvsNhXTm4zFO4sPOiDg851NslB3CT0Yd_d3tyDMutAHjC82XZy2st9cR7XAVutbhalHMaVo99aCjM7w'
    }
  }).then(response => {
    profile.name = response.data.name
    profile.last_name = response.data.last_name
    profile.roles = response.data.roles
    profile.is_blocked = response.data.is_blocked
  });

  profile.id= id;
  profile.adress= " Un address";
  profile.car= "Un Car";
  profile.passenger_score= 4;
  profile.driver_score= 4;
  console.log(profile)
  return profile;
}

// address
// : 
// "Banfield"
// id
// : 
// "4ubbG910SyTA4iVCXDxdKmBwrPB2"
// is_blocked
// : 
// false
// last_name
// : 
// "Ronaldo"
// name
// : 
// "Cristiano"
// roles
// : 
// ['Passenger']