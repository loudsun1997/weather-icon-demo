import React, { useState } from 'react';
import './App.css';
import SunIcon from './SunIcon';

function App() {
  const [rotation, setRotation] = useState(0);
  const [distance, setDistance] = useState(5);
  const [verticalOffset, setVerticalOffset] = useState(0);
  const [beamWidth, setBeamWidth] = useState(4);
  const [sunRadius, setSunRadius] = useState(30);
  const [beamCount, setBeamCount] = useState(8);
  const [beamStartOffset, setBeamStartOffset] = useState(1);
  const [beamEndLength, setBeamEndLength] = useState(15);
  const number = 5;

  const iconStyle = {
    transform: `rotate(${rotation}deg)`,
    marginRight: `${distance}px`,
    verticalAlign: `${verticalOffset}px`,
  };

  // Debug state changes
  console.log("Rendering with:", { sunRadius, beamStartOffset, beamEndLength });

  return (
    <div className="App">
      <h1>Weather Icon Demo</h1>
      <div className="preview">
        <SunIcon
          style={iconStyle}
          width="100"
          height="100"
          beamWidth={beamWidth}
          sunRadius={sunRadius}
          beamCount={beamCount}
          beamStartOffset={beamStartOffset}
          beamEndLength={beamEndLength}
        />
        <span className="numberStyle">{number}</span>
      </div>
      <div className="controls">
        {/* Rotation Slider */}
        <label>
          Rotation (°):
          <span className="slider-container">
            <input
              type="range"
              min="0"
              max="360"
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))} // Convert to number
            />
          </span>
          <span className="value-display">{rotation}</span>
        </label>

        {/* Distance Slider */}
        <label>
          Distance (px):
          <span className="slider-container">
            <input
              type="range"
              min="-30"
              max="100"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))} // Convert to number
            />
          </span>
          <span className="value-display">{distance}</span>
        </label>

        {/* Vertical Offset Slider */}
        <label>
          Vertical Offset (px):
          <span className="slider-container">
            <input
              type="range"
              min="-50"
              max="50"
              value={verticalOffset}
              onChange={(e) => setVerticalOffset(Number(e.target.value))} // Convert to number
            />
          </span>
          <span className="value-display">{verticalOffset}</span>
        </label>

        {/* Beam Width Slider */}
        <label>
          Beam Width (px):
          <span className="slider-container">
            <input
              type="range"
              min="1"
              max="30"
              value={beamWidth}
              onChange={(e) => setBeamWidth(Number(e.target.value))} // Convert to number
            />
          </span>
          <span className="value-display">{beamWidth}</span>
        </label>

        {/* Sun Radius Slider */}
        <label>
          Sun Radius (px):
          <span className="slider-container">
            <input
              type="range"
              min="10"
              max="50"
              value={sunRadius}
              onChange={(e) => setSunRadius(Number(e.target.value))} // Convert to number
            />
          </span>
          <span className="value-display">{sunRadius}</span>
        </label>

        {/* Beam Count Slider */}
        <label>
          Beam Count:
          <span className="slider-container">
            <input
              type="range"
              min="3"
              max="20"
              value={beamCount}
              onChange={(e) => setBeamCount(Number(e.target.value))} // Convert to number
            />
          </span>
          <span className="value-display">{beamCount}</span>
        </label>

        {/* Beam Start Offset Slider */}
        <label>
          Beam Start Offset (px):
          <span className="slider-container">
            <input
              type="range"
              min="0"
              max="50"
              value={beamStartOffset}
              onChange={(e) => setBeamStartOffset(Number(e.target.value))} // Convert to number
            />
          </span>
          <span className="value-display">{beamStartOffset}</span>
        </label>

        {/* Beam End Length Slider */}
        <label>
          Beam End Length (px):
          <span className="slider-container">
            <input
              type="range"
              min="5"
              max="50"
              value={beamEndLength}
              onChange={(e) => setBeamEndLength(Number(e.target.value))} // Convert to number
            />
          </span>
          <span className="value-display">{beamEndLength}</span>
        </label>
      </div>
    </div>
  );
}

export default App;