// src/services/machineService.js
import axios from 'axios';

const API_URL = 'https://api.example.com/machines';

export const getMachines = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении списка аппаратов:', error);
    return [];
  }
};
