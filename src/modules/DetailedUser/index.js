import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../api/Users"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProfilePicture from './ProfilePicture'
import PersonalInfo from './PersonalInfo'
import ButtonLeftList from './ButtonLeftList'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemLeft = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const DetailedUserContext = createContext({});

const DetailedUser = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({
    "name": "", 
    "last_name": "",
    "id": id,
    "roles": [],
    "is_blocked": false
  });
  useEffect(() => {
    getUserProfile(id, setProfile);
  }, [id]);
  return (
    <DetailedUserContext.Provider value={{profile, setProfile}}>
      <Grid container spacing = {4}>
        <Grid item md={12} xs={12}>
          <Item>
            <ProfilePicture/>
          </Item>
        </Grid>
        <Grid item md={6} xs={12}>
          <ItemLeft>
            <PersonalInfo />
          </ItemLeft>
        </Grid>
        <Grid item md={6} xs={12}>
          <Item>
            <ButtonLeftList/>
          </Item>
        </Grid>
        <Grid item md={12} xs={12}>
          <Item>
            Imaginarse Las Metricas
          </Item>
        </Grid>
      </Grid>
    </DetailedUserContext.Provider>
  );
};

export default DetailedUser;