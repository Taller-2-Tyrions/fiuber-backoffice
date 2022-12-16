import { useState, createContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Interactions from './Interactions'
import LoginMetrics from './LoginMetrics'
import SignUp from './SignUp'
import Payments from './Payments'
import Voyages from './Voyages'
import useAuth from "../../useAuth";
import { getAccessMetrics, getVoyagesMetrics, getPaymentsMetrics } from "../../api/Metrics"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const MetricsContext = createContext({});

function displayLogin(){
  return(
    <Grid container spacing = {1} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Item>
          <h3><b>Logins</b></h3>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <LoginMetrics/>
        </Item>
      </Grid>
    </Grid>
  )
}

function displaySignUp(){
  return(
    <Grid container spacing = {1} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
          <Item>
            <h3><b>SignUp</b></h3>
          </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <SignUp/>
        </Item>
      </Grid>
    </Grid>
  )
}

function displayPayments(metrics){
  return(
    <Grid container spacing = {1} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
          <Item>
            <h3><b>Pagos</b></h3>
          </Item>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Item>
          <Payments/>
        </Item>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Item>
            <h3>Precio Promedio:</h3>
            <h3><b>{metrics.average_price}</b></h3>
        </Item>
      </Grid>
    </Grid>
  )
}

function displayVoyages(metrics){
  return(
    <Grid container spacing = {1} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
          <Item>
            <h3><b>Viajes</b></h3>
          </Item>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Item>
          <Voyages/>
        </Item>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Item>
            <h3>Tiempo Promedio:</h3>
            <h3><b>{metrics.average_duration}</b></h3>
            <h3>Cantidad Viajes:</h3>
            <h3><b>{metrics.voyages}</b></h3>
        </Item>
      </Grid>
    </Grid>
  )
}

const Metrics = () => {
  const [accessMetrics, setAccessMetrics] = useState({
    "signup_federate_evt": 0,
    "signup_pass_evt": 0,
    "login_federate_evt": 0,
    "login_pass_evt": 0,
    "block_evt": 0,
    "reset_evt": 0
  });

  
  const [paymentsMetrics, setPaymentsMetrics] = useState({
    "payments_success": 0,
    "payments_fail": 0,
    "average_price": 0
  });

  const [voyagesMetrics, setVoyagesMetrics] = useState({
    "voyages": 0,
    "average_duration": 0,
    "vip_voyages": 0,
    "no_vip_voyages": 0
  });

  const { accessToken } = useAuth();
  useEffect(() => {
    getAccessMetrics(setAccessMetrics, accessToken);
    getVoyagesMetrics(setVoyagesMetrics, accessToken);
    getPaymentsMetrics(setPaymentsMetrics, accessToken);
  }, []);

  return (
    <MetricsContext.Provider value={{accessMetrics, paymentsMetrics, voyagesMetrics}}>
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

        <Grid item lg={6} md={12} xs={12}>
          <Item>
            {displayLogin()}
          </Item>
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <Item>
            {displaySignUp()}
          </Item>
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <Item>
            {displayPayments(paymentsMetrics)}
          </Item>
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <Item>
            {displayVoyages(voyagesMetrics)}
          </Item>
        </Grid>
          
      </Grid>
    </div>
    </MetricsContext.Provider>
  );
};
  
export default Metrics;