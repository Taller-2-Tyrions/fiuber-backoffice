import React from 'react';
import { Form, Button, InputNumber} from 'antd';
import useAuth from '../../useAuth';
import { useState, useEffect } from "react";
import { getConstants, sendConstants } from "../../api/Quotation"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function renderDataButton(text, name, clarification){
  return(
    <Item>
      <div>
        <b>{text}</b>
        <Form.Item name={name}>
          <InputNumber />
        </Form.Item>
        <p>{clarification}</p>
      </div>
    </Item>
  )
}



function quotationForm(form, accessToken){
    const onFinish = (values) => {
        sendConstants(values, accessToken)
    };
    return (
        <div>
            <Form form={form} layout="vertical" autoComplete="off"
            onFinish={onFinish}>
                <Grid container spacing = {1} alignItems="center" justifyContent="center">
                    <Grid item md={12} xs={12}>
                        <Item>
                            <h1 style = {{fontSize:50}}>Cotización</h1>
                        </Item>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Precio Por Minuto", "price_minute", "Precio por minuto esperado del viaje")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Precio Por Metro", "price_meter", "Precio por metro esperado del viaje")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Multiplicador VIP", "price_vip", "Mulplica el precio final por este valor si es un servicio tipo VIP")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Multiplicador Nocturno", "plus_night", "Mulplica el precio final por este valor si es un servicio nocturno")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Incremento Maximo Chofer", "max_increase_driver", "Cantidad maxima de incremento de ganancia para el chofer")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Descuento Maximo Pasajero", "max_discount_passenger", "Cantidad maxima de descuento para el chofer")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Multiplicador Antigüedad Chofer", "seniority_driver", "Mulplica la cantidad de dias para generar un incremento de ganancia al chofer")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Multiplicador Viajes Diarios Chofer", "daily_driver", "Mulplica la cantidad de viajes diarios para generar un incremento de ganancia al chofer")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Multiplicador Viajes Mensuales Chofer", "monthly_driver", "Mulplica la cantidad de viajes mensuales para generar un incremento de ganancia al chofer")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Multiplicador Antigüedad Pasajero", "seniority_passenger", "Mulplica la cantidad de dias para generar un incremento de ganancia al pasajero")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Multiplicador Viajes Diarios Pasajero", "daily_passenger", "Mulplica la cantidad de viajes diarios para generar un incremento de ganancia al pasajero")}
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        {renderDataButton("Multiplicador Viajes Mensuales Pasajero", "monthly_passenger", "Mulplica la cantidad de viajes mensuales para generar un incremento de ganancia al pasajero")}
                    </Grid>

                    <Grid item xs={12}>
                        <Item>
                            <div>
                                <p style = {{fontSize:30}}><b>Por Favor Asegurese Los Valores Cargados Son Correctos Antes De Confirmar</b></p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Grid>
                </Grid>
            </Form>
        </div>
      );
}

const Quotation = () => {
    const { accessToken } = useAuth();

    const [form] = Form.useForm();
    useEffect(() => {
        getConstants(form, accessToken);
    }, []);

  return (
    <div>
        {quotationForm(form, accessToken)}
    </div>
  );
}

export default Quotation;
