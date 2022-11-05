import { useContext } from 'react'
import { Button } from 'antd';
import { DetailedUserContext } from '../../index.js'


const BlockButton = () => {
  const {profile, setProfile} = useContext(DetailedUserContext);
  return (
    <div>
      <Button type="primary" block style={{"marginTop": "5px", background: profile.is_blocked? "green": "red"}}
              onClick={()=> {
                if (profile.is_blocked) {
                  // {Bloquear Realmente} Aca hay que hacer una llamada a API. 
                  // setProfile
                } else {
                  // {Desbloquear Realmente}
                  // setProfile
                }}}>
        {profile.is_blocked? "Desbloquear Usuario": "Bloquear Usuario"}
      </Button>
    </div>
  );
}

export default BlockButton;