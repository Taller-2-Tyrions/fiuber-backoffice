import { DetailedUserContext } from '../index.js'
import { useContext } from 'react'

const PersonalInfo = () => {
  const {profile} = useContext(DetailedUserContext);
  return(
    <div>
      <p><b>Nombre y Apellido — </b>{profile.name} Y {profile.last_name}</p>
      <hr></hr>
      <p><b>Email — </b>{profile.email}</p>
      <hr></hr>
      <p><b>Dirección (IF PASSENGER) — </b>{profile.adress}</p>
      <hr></hr>
      <p><b>Auto (IF DRIVER) — </b>{profile.car}</p>
    </div>  
  )
}

export default PersonalInfo;