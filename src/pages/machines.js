// src/pages/Machines.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Layout from '../layouts/layout';
import MachineCard from '../components/machines/machineCard';
import { getMachines } from '../services/machineService';

function Machines() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    // Получение списка аппаратов из API
    getMachines().then((data) => setMachines(data));
  }, []);

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>Аппараты</Typography>
        <Grid container spacing={3}>
          {machines.map((machine) => (
            <Grid item xs={12} md={6} lg={4} key={machine.id}>
              <MachineCard machine={machine} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export default Machines;
