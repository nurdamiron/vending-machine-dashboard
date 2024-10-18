// src/components/machines/MachineMonitor.js
import React, { useEffect, useState } from 'react';
import socket from '../../services/socketService';

function MachineMonitor({ machineId }) {
  const [machineData, setMachineData] = useState(null);

  useEffect(() => {
    // Запрос начальных данных
    socket.emit('getMachineData', { machineId });

    // Слушаем обновления данных аппарата
    socket.on('machineData', (data) => {
      if (data.id === machineId) {
        setMachineData(data);
      }
    });

    // Отписываемся от событий при размонтировании компонента
    return () => {
      socket.off('machineData');
    };
  }, [machineId]);

  if (!machineData) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <div>
      <h2>{machineData.name}</h2>
      <p>Расположение: {machineData.location}</p>
      <p>Статус: {machineData.status}</p>
      {/* Отображение уровней жидкостей */}
      {machineData.fluids.map((fluid) => (
        <div key={fluid.id}>
          <p>{fluid.name}: {fluid.level}%</p>
        </div>
      ))}
    </div>
  );
}

export default MachineMonitor;
