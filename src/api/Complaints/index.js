import axios from 'axios';

const GATEWAY_URL = "https://fiuber-gateway.herokuapp.com"

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3YjE5MTI0MGZjZmYzMDdkYzQ3NTg1OWEyYmUzNzgzZGMxYWY4OWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZml1YmVyLTM2Yjg2IiwiYXVkIjoiZml1YmVyLTM2Yjg2IiwiYXV0aF90aW1lIjoxNjY4MDUxNzU3LCJ1c2VyX2lkIjoiZjdrMnF3dHc5NWhZcmF0bTZkNVZoc1VLTjY1MiIsInN1YiI6ImY3azJxd3R3OTVoWXJhdG02ZDVWaHNVS042NTIiLCJpYXQiOjE2NjgwNTE3NTcsImV4cCI6MTY2ODA1NTM1NywiZW1haWwiOiJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbmNvbnRyYXNlbmlhc3RyaW5nQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MNrZxWUTok3sBdfbc7Lj1zdn2kaljiKUIANJp9BOTvVNzeeqdnQvNLK5Je6Q7UFhtP53fuaAoTPahhHhGrke6Y1cuKpFboigNxHpNCWJwkAyFUupxhj_jQwXOs9p278rtvjb0RXv6gDJBSHxN2xRb84QfvgkllQ19tZ9xn4PIKiO33DzQIQwIkpttBWGIyA-PA3dL8WOtQGHRa4555Tszjtidz9iV5uD-4PbpSsmn1LUg59SHm082Ugy26iCCCjZ57I5-sO3AmgQbzTu-jZjWk-pUnoSzBGwL3Cvwm7_FYjV2LM6C6rdop6rWtrW1_1WvFiY7aoHB2bY1cKlgG1_WQ'


// export function getComplaints() {
//     // Aca deberiamos hacer una llamada al gateway
//     // Cambiar el nombre de las columnas en modules/Complaints
//     // para que quede bien luego de la llamada.
    
//     return [
//       {
//         key: 1,
//         id_voyage: 'F876s2',
//         complaint_type: 'Chofer denunciado por acoso',
//         complainer_id: '123sd',
//         complainer_name: 'JRR',
//         reported_id: 'AASDF',
//         reported_name: 'El loco',
//         comments: 'El loco esta re loco',
//       },
//       {
//         key: 2,
//         id_voyage: 'F876ss2',
//         complaint_type: 'Chofer denunciado por acoso',
//         complainer_id: '123sd',
//         complainer_name: 'JRR',
//         reported_id: 'AASDF',
//         reported_name: 'El loco',
//         comments: 'El loco esta re loco',
//       },
//     ];
//   }
  
  export function getComplaints(setUsers) {
    axios.get(GATEWAY_URL + "/admin/complaints", {
      headers: {
        'token': token
      }
    }).then(response => {
      setUsers(response.data)
    });
  }
  