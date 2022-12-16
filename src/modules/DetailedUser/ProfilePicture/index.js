import { renderRoles } from '../../Users/Roles'
import { useContext } from 'react'
import { DetailedUserContext } from '../index.js'
import ProfileDefault from '../../../assets/profile-picture-default.jpg'

const ProfilePicture = () => {
  const {profile} = useContext(DetailedUserContext);
  const addPicture = () => {
    if (profile.picture) {
      return (
        <img src= {profile.picture} style={{"borderRadius": "50%"}} width={150} alt='Foto de Perfil'/>
      );
    }
    return (
      <img src= {ProfileDefault} style={{"borderRadius": "50%"}} width={150} alt='Foto de Perfil'/>
    );
  } 
  return(
    <div >
      {addPicture()}
      <h4>{profile.name}</h4>
      {renderRoles(profile.roles)}
    </div>
  )
}

export default ProfilePicture;