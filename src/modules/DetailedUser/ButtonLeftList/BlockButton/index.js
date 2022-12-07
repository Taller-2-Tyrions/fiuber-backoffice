import { useContext } from 'react'
import { Button } from 'antd';
import { DetailedUserContext } from '../../index.js'
import { blockUser } from '../../../../api/Users'
import { unblockUser } from '../../../../api/Users'
import useAuth from "../../../../useAuth";


const BlockButton = () => {
  const {profile, setProfile} = useContext(DetailedUserContext);
  const { accessToken } = useAuth();
  return (
    <div>
      <Button type="primary" block style={{"marginTop": "5px", background: profile.is_blocked? "#2BF580": "#F75C5C"}}
        onClick={()=> {
          if (profile.is_blocked) {
            unblockUser(profile.id, setProfile, accessToken)
          } else {
            blockUser(profile.id, setProfile, accessToken)
          }}}>
        {profile.is_blocked? "Desbloquear Usuario": "Bloquear Usuario"}
      </Button>
    </div>
  );
}

export default BlockButton;