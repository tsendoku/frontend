import React from 'react';

const CarBlock = ({ title, loadCapacity, length, width, height, sizes }) => {
  return (
    <div className="autopark-carblock">
      <h5 className="autopark-title">{title}</h5>
      <div className="autopark-text">
        <p className="firststring">Грузоподъёмность</p>
        <span className="firststring">{loadCapacity}</span>
        <p>Длина</p>
        <span>{length}</span>
        <p>Ширина</p>
        <span>{width}</span>
        <p>Высота</p>
        <span>{height}</span>
        <p>Объёмы фургона</p>
        <span>{sizes}</span>
      </div>
    </div>
  );
};

export default CarBlock;
