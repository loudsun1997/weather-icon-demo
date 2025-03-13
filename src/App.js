import React, { useState } from 'react';
import './App.css';
import SunIcon from './SunIcon';

function App() {
  const [rotation, setRotation] = useState(0);
  const [distance, setDistance] = useState(5);
  const [verticalOffset, setVerticalOffset] = useState(0);
  const number = 5;

  const iconStyle = {
    transform: `rotate(${rotation}deg)`,
    marginRight: `${distance}px`,
    verticalAlign: `${verticalOffset}px`,
  };

  return (
    <div className="App">
      <h1>Weather Icon Demo</h1>
      <div className="preview">
        <SunIcon style={iconStyle} width="100" height="100" />
        <span className="numberStyle">{number}</span>
      </div>
      <div className="controls">
        <label>
          Rotation (°):
          <span className="slider-container">
            <input
              type="range"
              min="0"
              max="360"
              value={rotation}
              onChange={(e) => setRotation(e.target.value)}
            />
          </span>
          <span className="value-display">{rotation}</span>
        </label>
        <label>
          Distance (px):
          <span className="slider-container">
            <input
              type="range"
              min="-30"
              max="100"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </span>
          <span className="value-display">{distance}</span>
        </label>
        <label>
          Vertical Offset (px):
          <span className="slider-container">
            <input
              type="range"
              min="-50"
              max="50"
              value={verticalOffset}
              onChange={(e) => setVerticalOffset(e.target.value)}
            />
          </span>
          <span className="value-display">{verticalOffset}</span>
        </label>
      </div>
    </div>
  );
}

export default App;