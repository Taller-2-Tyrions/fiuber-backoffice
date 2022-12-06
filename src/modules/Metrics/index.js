import { useState, createContext } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Interactions from './Interactions'
import LoginMetrics from './LoginMetrics'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const MetricsContext = createContext({});


const Metrics = () => {
  const [metrics, setMetrics] = useState({
    "login_federado": 65,
    "login_password": 40,
    "signup_federado": 25,
    "signup_password": 16,
    "blocks": 25,
    "resets": 45
  });

  return (
    <MetricsContext.Provider value={{metrics, setMetrics}}>
    <div>
      <Grid container spacing = {1} alignItems="center" justifyContent="center">
        <Grid item md={12}>
          <Item>
            <h3><b>Accesos</b></h3>
          </Item>
        </Grid>

        <Grid item md={12}>
          <Item>
            <Interactions/>
          </Item>
        </Grid>
        
        <Grid item md={6} xs={12}>
          <Item>
            <h3><b>Logins</b></h3>
          </Item>
        </Grid>
        
        <Grid item md={6} xs={12}>
          <Item>
            <h3><b>Signup</b></h3>
          </Item>
        </Grid>

        <Grid item md={6} xs={12}>
          <Item>
            <LoginMetrics/>
          </Item>
        </Grid>
        
        <Grid item md={6} xs={12}>
          <Item>
            <LoginMetrics/>
          </Item>
        </Grid> 
      </Grid>
    </div>
    </MetricsContext.Provider>
  );
};
  
export default Metrics;