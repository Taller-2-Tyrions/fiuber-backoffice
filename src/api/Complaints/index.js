export function getComplaints() {
    // Aca deberiamos hacer una llamada al gateway
    // Cambiar el nombre de las columnas en modules/Complaints
    // para que quede bien luego de la llamada.
    
    return [
      {
        key: 1,
        id_voyage: 'F876s2',
        complaint_type: 'Chofer denunciado por acoso',
        complainer_id: '123sd',
        complainer_name: 'JRR',
        reported_id: 'AASDF',
        reported_name: 'El loco',
        comments: 'El loco esta re loco',
      },
      {
        key: 2,
        id_voyage: 'F876ss2',
        complaint_type: 'Chofer denunciado por acoso',
        complainer_id: '123sd',
        complainer_name: 'JRR',
        reported_id: 'AASDF',
        reported_name: 'El loco',
        comments: 'El loco esta re loco',
      },
    ];
  }
  