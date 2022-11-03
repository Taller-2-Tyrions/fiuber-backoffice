export function getUsers() {
  // Aca deberiamos hacer una llamada al gateway
  // Cambiar el nombre de las columnas en modules/Users
  // para que quede bien luego de la llamada.
  
  return [
    {
      key: 1,
      id: 'F8762',
      name: 'Mateo',
      last_name: 'Elmas Capo',
      roles: ['Driver', 'Passenger'],
    },
    {
      key: 2,
      id: 'F8762sd',
      name: 'Ine',
      last_name: 'Facha',
      roles: ['Admin', 'Driver'],
    },
  ];
}


export function getUserProfile(id) {
  return {};
}