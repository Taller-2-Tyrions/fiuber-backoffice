import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../api/Users"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemLeft = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function renderSubmitButtons(){
    return (
        <div>
            <Grid item md={6} xs={12}>
                <Item>
                    <div>
                        <input type="submit" defaultValue="Submit" />
                    </div>
                </Item>
            </Grid>
                <Grid item md={6} xs={12}>
                <Item>
                    <div>
                        <input type="reset" />
                    </div>
                </Item>
            </Grid>
        </div>
    )
}

const Quotation = () => {
  return (
    <form>
        <Grid container spacing = {1}>
            <Grid item md={12} xs={12}>
            <Item>
                <h1 style = {{fontSize:50}}>Cotización</h1>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Precio Por Minuto:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Precio por minuto esperado del viaje</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Precio Por Kilometro:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Precio por kilometro del trayecto a realizar</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Multiplicador VIP:</b></label><br/>
                    <input type="number" step="any" min = "1" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Mulplica el precio final por este valor si es un servicio tipo VIP</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Multiplicador Nocturno:</b></label><br/>
                    <input type="number" step="any" min = "1" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Mulplica el precio final por este valor si es un servicio nocturno</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Incremento Maximo Chofer:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Cantidad maxima de incremento de ganancia para el chofer</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Descuento Maximo Pasajero:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Cantidad maxima de descuento para el chofer</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Multiplicador Antigüedad Chofer:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Mulplica la cantidad de dias para generar un incremento de ganancia al chofer</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Multiplicador Viajes Diarios Chofer:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Mulplica la cantidad de viajes diarios para generar un incremento de ganancia al chofer</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Multiplicador Viajes Mensuales Chofer:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Mulplica la cantidad de viajes mensuales para generar un incremento de ganancia al chofer</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Multiplicador Antigüedad Pasajero:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Mulplica la cantidad de dias para generar un descuento al Pasajero</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Multiplicador Viajes Diarios Pasajero:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Mulplica la cantidad de viajes diarios para generar un descuento al Pasajero</p>
                </div>
            </Item>
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
            <Item>
               <div>
                    <label htmlFor="fname" style = {{fontSize:20}}> <b>Multiplicador Viajes Mensuales Pasajero:</b></label><br/>
                    <input type="number" step="any" min = "0" id="fname" name="fname" defaultValue="3" /><br />
                    <p>Mulplica la cantidad de viajes mensuales para generar un descuento al Pasajero</p>
                </div>
            </Item>
            </Grid>

            <Grid item xs={12}>
            <Item>
               <div>
                    <p style = {{fontSize:30}}><b>Por Favor Asegurese Los Valores Cargados Son Correctos Antes De Confirmar</b></p>
                </div>
            </Item>
            </Grid>

            <Grid item md={6} xs={12}>
                <Item>
                    <div>
                        <input type="submit" defaultValue="Confirmar" style = {{fontSize:30, backgroundColor:"#2BF580"}}/>
                    </div>
                </Item>
            </Grid>
                <Grid item md={6} xs={12}>
                <Item>
                    <div>
                        <input type="reset"  defaultValue="Resetear" style = {{fontSize:30, backgroundColor:"#F75C5C"}}/>
                    </div>
                </Item>
            </Grid>
        </Grid>
    </form>
  );
}

export default Quotation;
