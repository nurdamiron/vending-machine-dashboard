// Пример: src/components/MachineStatus.js
import React, { useEffect, useState } from 'react';
import socket from '../../services/socketService';

function MachineStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Подписываемся на событие 'statusUpdate' от сервера
    socket.on('statusUpdate', (data) => {
      setStatus(data);
    });

    // Отписываемся от события при размонтировании компонента
    return () => {
      socket.off('statusUpdate');
    };
  }, []);

  return (
    <div>
      <h2>Статус аппарата:</h2>
      {status ? <p>{status}</p> : <p>Загрузка...</p>}
    </div>
  );
}

export default MachineStatus;
