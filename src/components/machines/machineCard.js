// src/components/machines/MachineCard.js
import React from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

function MachineCard({ machine }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{machine.name}</Typography>
        <Typography color="textSecondary">{machine.location}</Typography>
        <Typography variant="subtitle1">Уровень жидкостей:</Typography>
        {machine.fluids.map((fluid) => (
          <div key={fluid.id}>
            <Typography variant="body2">{fluid.name}</Typography>
            <LinearProgress variant="determinate" value={fluid.level} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default MachineCard;
