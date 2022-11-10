import { useContext } from 'react'
import { Button } from 'antd';
import { registerAdmin } from '../../../../api/RegisterAdmin'
import { DetailedUserContext } from '../../index.js'


const AddAdminButton = () => {
  const {profile, setProfile} = useContext(DetailedUserContext);
  return (
    <div>
      <Button type="primary" block style={{ background: "#2BF580" }}
          disabled ={profile.roles.includes("Admin")}
          onClick={()=> {
            registerAdmin(profile.id, setProfile, profile)
        }}>
        Dar Permisos de Administrador
      </Button>
    </div>
  );
}

export default AddAdminButton;