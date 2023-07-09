import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Button } from '@mui/material';
import {thermometer} from '../css/thermometer.css';

// components

// sections
import { sendDataToFirebase } from '../firebase';

import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import Thermometer from "../sections/@dashboard/app/AppThermometer";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const [bulbStatus, setBulbStatus] = useState(false);
  const [fanStatus1, setFanStatus1] = useState(false);
  const [fanStatus2, setFanStatus2] = useState(false);
  const [humidifier, setHumidifier] = useState(false);
  const [result, setResult] = useState('Off');
  const [result1, setResult1] = useState('Off');

  const [result2, setResult2] = useState('Off');
  const [result3, setResult3] = useState('Off');

  const handleFanAData = async () => {
    // Define data to be sent

    setFanStatus1(!fanStatus1);
    setResult1(fanStatus1 ? 'On' : 'Off');
      const iconElement = document.querySelector('.MuiCard-root .StyledIcon');
      iconElement.classList.add('button-clicked');
    setTimeout(() => {
      iconElement.classList.remove('button-clicked');
    }, 300);
  };

  const handleFanBData = async () => {
    // Define data to be sent

    setFanStatus2(!fanStatus2);
    setResult2(fanStatus2 ? 'On' : 'Off');
  };
  const handleHumidifier = async () => {
    // Define data to be sent

    setHumidifier(!humidifier);
    setResult3(humidifier ? 'On' : 'Off');
  };
  const handleBulbData = async () => {
    // Define data to be sent

    setBulbStatus(!bulbStatus);
    setResult(bulbStatus ? 'On' : 'Off');
  };
    const temperature = 25;

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hatch a smile!!!
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              onClick={handleFanAData}
              title="Fan A"
              condition={result1}
              total={0}
              icon={'fa-solid:fan'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Fan B"
              condition={result2}
              total={0}
              color="info"
              icon={'fa-solid:fan'}
              onClick={handleFanBData}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} >
            <AppWidgetSummary
              onClick={handleBulbData}
              title="Bulb"
              condition={result}
              total={0}
              color="warning"
              icon={'ion:bulb'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Humidifier"
              condition={result3}
              total={0}
              color="error"
              icon={'carbon:humidity-alt'}
              onClick={handleHumidifier}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}container justifyContent="center" alignItems="center">

              <div >
                  <Thermometer temperature={temperature} />
              </div>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
