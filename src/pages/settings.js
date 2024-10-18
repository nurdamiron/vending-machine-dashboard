// src/pages/Settings.js
import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

function Settings() {
  const { enqueueSnackbar } = useSnackbar();
  const [parameter1, setParameter1] = useState('');
  const [parameter2, setParameter2] = useState('');

  const saveSettings = async (settingsData) => {
    try {
      // Здесь вы можете добавить логику сохранения настроек
      // Например, отправку данных на сервер через API
      // await api.saveSettings(settingsData);

      // Для примера эмулируем успешное сохранение с задержкой
      await new Promise((resolve) => setTimeout(resolve, 1000));

      enqueueSnackbar('Настройки сохранены успешно!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Ошибка при сохранении настроек.', { variant: 'error' });
    }
  };

  const handleSave = () => {
    const settingsData = {
      parameter1,
      parameter2,
    };
    saveSettings(settingsData);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Настройки
      </Typography>
      <TextField
        label="Параметр 1"
        value={parameter1}
        onChange={(e) => setParameter1(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Параметр 2"
        value={parameter2}
        onChange={(e) => setParameter2(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
        Сохранить
      </Button>
    </Box>
  );
}

export default Settings;
