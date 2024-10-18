// src/services/socketService.js

import { io } from 'socket.io-client';

// Замените 'https://your-server-url.com' на ваш фактический URL сервера
const socket = io('https://your-server-url.com');

export default socket;
