import { createContext, useState, useEffect } from "react";
import { getConstants } from "../../api/Quotation"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const GATEWAY_URL="https://fiuber-gateway.herokuapp.com/admin/constants"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function renderSubmitButton(){
  return(
    <div>
      <Item>
        <div>
        <input type="submit" defaultValue="Confirmar" style = {{fontSize:30, backgroundColor:"#2BF580"}}/>
        </div>
      </Item>
    </div>
  )
}

function renderResetButton(){
  return(
    <div>
      <Item>
        <div>
            <input type="reset"  defaultValue="Resetear" style = {{fontSize:30, backgroundColor:"#F75C5C"}}/>
        </div>
      </Item>
    </div>
  )
}

function renderDataButton(text, name, value, clarification, setFunction){
  return(
    <Item>
      <div>
          <label htmlFor={name} style = {{fontSize:20}}> <b>{text}</b></label>
          <br/>
            <input
            type="number"
            step="any"
            min = "0"
            id={name}
            name={name}
            defaultValue={value}
            onChange={setFunction(prevState => {
                let jasper = Object.assign({}, prevState.jasper);  // creating copy of state variable jasper
                jasper.name = 'someothername';                     // update the name property, assign a new value                 
                return { jasper };                                 // return new object jasper object
              })}
            />
          <br />
          {/* <input type="number" step="any" min = "0" id={name} name={name} defaultValue={value} /><br /> */}
          <p>{clarification}</p>
      </div>
    </Item>
  )
}

function sendSubmit(){
    let i = 0
}

function quotationForm(constants, setFunction){
    return (
        <form onSubmit={sendSubmit()}>
            <Grid container spacing = {1}>
                <Grid item md={12} xs={12}>
                <Item>
                    <h1 style = {{fontSize:50}}>Cotización</h1>
                </Item>
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                  {renderDataButton("Precio Por Minuto", "price_minute", constants.price_minute, "Precio por minuto esperado del viaje", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                  {renderDataButton("Precio Por Metro", "price_meter", constants.price_meter, "Precio por metro esperado del viaje", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                  {renderDataButton("Multiplicador VIP", "price_vip", constants.price_vip, "Mulplica el precio final por este valor si es un servicio tipo VIP", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                  {renderDataButton("Multiplicador Nocturno", "plus_night", constants.plus_night, "Mulplica el precio final por este valor si es un servicio nocturno", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                  {renderDataButton("Incremento Maximo Chofer", "max_increase_driver", constants.max_increase_driver, "Cantidad maxima de incremento de ganancia para el chofer", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                  {renderDataButton("Descuento Maximo Pasajero", "max_discount_passenger", constants.max_discount_passenger, "Cantidad maxima de descuento para el chofer", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                  {renderDataButton("Multiplicador Antigüedad Chofer", "seniority_driver", constants.seniority_driver, "Mulplica la cantidad de dias para generar un incremento de ganancia al chofer", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                    {renderDataButton("Multiplicador Viajes Diarios Chofer", "daily_driver", constants.daily_driver, "Mulplica la cantidad de viajes diarios para generar un incremento de ganancia al chofer", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                    {renderDataButton("Multiplicador Viajes Mensuales Chofer", "monthly_driver", constants.monthly_driver, "Mulplica la cantidad de viajes mensuales para generar un incremento de ganancia al chofer", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                  {renderDataButton("Multiplicador Antigüedad Pasajero", "seniority_passenger", constants.seniority_passenger, "Mulplica la cantidad de dias para generar un incremento de ganancia al pasajero", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                    {renderDataButton("Multiplicador Viajes Diarios Pasajero", "daily_passenger", constants.daily_passenger, "Mulplica la cantidad de viajes diarios para generar un incremento de ganancia al pasajero", setFunction)}
                </Grid>
    
                <Grid item lg={4} md={6} xs={12}>
                    {renderDataButton("Multiplicador Viajes Mensuales Pasajero", "monthly_passenger", constants.monthly_passenger, "Mulplica la cantidad de viajes mensuales para generar un incremento de ganancia al pasajero", setFunction)}
                </Grid>
    
                <Grid item xs={12}>
                <Item>
                   <div>
                        <p style = {{fontSize:30}}><b>Por Favor Asegurese Los Valores Cargados Son Correctos Antes De Confirmar</b></p>
                    </div>
                </Item>
                </Grid>
    
                <Grid item md={6} xs={12}>
                    {renderSubmitButton()}
                </Grid>
                <Grid item md={6} xs={12}>
                    {renderResetButton()}
                </Grid>
            </Grid>
        </form>
      );
}

const Quotation = () => {
    const [constants, setConstants] = useState({
        "price_meter": 1.0,
        "price_minute": 2.0,
        "price_vip": 1.0,
        "plus_night": 1.0,
        "seniority_driver": 1.0,
        "daily_driver": 1.0,
        "monthly_driver": 1.0,
        "seniority_passenger": 1.0,
        "daily_passenger": 1.0,
        "monthly_passenger": 1.0,
        "max_discount_passenger": 1.0,
        "max_increase_driver": 1.0
      });

    useEffect(() => {
        getConstants(setConstants);
    }, []);

    return(
        <div>
            {quotationForm(constants)}
        </div>
    )
    
}

export default Quotation;
