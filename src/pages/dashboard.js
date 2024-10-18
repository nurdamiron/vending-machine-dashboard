// src/pages/Dashboard.js

import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import Layout from '../layouts/layout';
import SalesChart from '../components/dashboard/salesChart';
import MachineStatus from '../components/machines/machineStatus';

function Dashboard() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Главная панель управления
        </Typography>
        <Grid container spacing={3}>
          {/* Ключевые показатели */}
          <Grid item xs={12} md={4}>
            <Paper>
              {/* Компонент с общими продажами */}
            </Paper>
          </Grid>
          {/* ... другие показатели */}
          {/* График продаж */}
          <Grid item xs={12}>
            <Paper>
              <SalesChart />
            </Paper>
          </Grid>
          {/* Состояние аппаратов */}
          <Grid item xs={12}>
            <MachineStatus />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Dashboard;
