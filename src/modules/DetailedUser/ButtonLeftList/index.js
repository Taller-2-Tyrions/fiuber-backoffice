import BlockButton from "./BlockButton";
import AddAdminButton from "./AddAdminButton";
import Grid from '@mui/material/Grid';
import { DetailedUserContext } from '../index.js'
import { useContext } from 'react'


const ButtonLeftList = () => { 
  const {profile} = useContext(DetailedUserContext);
  
  function addCalificationPassenger() {
    console.log(profile)
    if (profile.roles && profile.roles.includes("Passenger"))
      return (
        <div>
          <span><b>Pasajero</b>: {profile.passenger_score}/5</span>
        </div>
      );
  }
  function addCalificationDriver() {
    if (profile.roles && profile.roles.includes("Driver"))
      return (
        <div>
          <span><b>Chofer</b>: {profile.driver_score}/5</span>
        </div>
      );
  }

  return (
    <Grid
    container spacing={2}
    direction="column"
    >
      <Grid item xs={2}>{addCalificationPassenger()}</Grid>
      <Grid item xs={2}>{addCalificationDriver()}</Grid>
      <Grid item xs={5}><BlockButton /></Grid>
      <Grid item xs={5}><AddAdminButton /></Grid>
    </Grid>
  );
}

export default ButtonLeftList;