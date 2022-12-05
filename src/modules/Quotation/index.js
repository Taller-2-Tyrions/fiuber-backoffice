import React from 'react';
import { Form, Button, InputNumber} from 'antd';


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

const onFinish = (values) => {
    sendConstants(values, "test_token")
};

function quotationForm(form, constants){
    return (
        <div>
            <Form form={form} layout="vertical" autoComplete="off"
            initialValues={{
                "price_minute": constants.price_minute,
                "price_meter": constants.price_meter,
                "price_vip": constants.price_vip,
                "plus_night": constants.plus_night,
                "seniority_driver": constants.seniority_driver,
                "daily_driver": constants.daily_driver,
                "monthly_driver": constants.monthly_driver,
                "seniority_passenger": constants.seniority_passenger,
                "daily_passenger": constants.daily_passenger,
                "monthly_passenger": constants.monthly_passenger,
                "max_discount_passenger": constants.max_discount_passenger,
                "max_increase_driver": constants.max_increase_driver
            }}
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
    const [constants, setConstants] = useState({
        "price_minute": 1.0,
        "price_meter": 1.0,
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

    const [form] = Form.useForm();
  return (
    <div>
        {quotationForm(form, constants)}
    </div>
  );
}

export default Quotation;
