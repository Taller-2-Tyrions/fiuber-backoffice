import { DetailedUserContext } from '../index.js'
import { useContext } from 'react'

function addAddress(profile){
    if (profile.address){
        return(
            <div>
                <hr></hr>
                <p><b>Dirección — </b>{profile.address}</p>
            </div>
        )
    }
    return (<></>)
}

function addCar(profile){
    if (profile.car){
        return(
            <div>
                <hr></hr>
                <p><b>Auto — </b>{profile.car.model} {profile.car.year} — Patente: {profile.car.plaque} — {"👤".repeat(profile.car.capacity)}</p>
            </div>
        )
    }
    return (<></>)
}

const PersonalInfo = () => {
  const {profile} = useContext(DetailedUserContext);
  return(
    <div>
      <p><b>Nombre y Apellido — </b>{profile.name} {profile.last_name}</p>
      <hr></hr>
      <p><b>id — </b>{profile.id}</p>
      {addAddress(profile)}
      {addCar(profile)}
      
    </div>  
  )
}

export default PersonalInfo;