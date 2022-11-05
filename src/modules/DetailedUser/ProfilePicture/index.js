import { renderRoles } from '../../Users/Roles'
import { useContext } from 'react'
import { DetailedUserContext } from '../index.js'

const ProfilePicture = () => {
  const {profile} = useContext(DetailedUserContext);

  return(
    <div >
      <img src= {profile.picture} 
            style={{"borderRadius": "50%"}} width={150} />
      <h4>{profile.name}</h4>
      {renderRoles(profile.roles)}
    </div>
  )
}

export default ProfilePicture;