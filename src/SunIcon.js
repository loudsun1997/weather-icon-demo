import React from 'react';

const SunIcon = ({ style, width = "50", height = "50" }) => {
  return (
    <svg
      height={height}
      width={width}
      style={style}
      viewBox="20 20 160 160" // Adjusted to reduce dead space
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="30" fill="white" stroke="white" strokeWidth="1" />
      <line x1="140" x2="155" y1="100" y2="100" stroke="white" strokeWidth="4" />
      <line x1="128.28" x2="138.89" y1="71.72" y2="61.11" stroke="white" strokeWidth="4" />
      <line x1="100" x2="100" y1="60" y2="45" stroke="white" strokeWidth="4" />
      <line x1="71.72" x2="61.11" y1="71.72" y2="61.11" stroke="white" strokeWidth="4" />
      <line x1="60" x2="45" y1="100" y2="100" stroke="white" strokeWidth="4" />
      <line x1="71.72" x2="61.11" y1="128.28" y2="138.89" stroke="white" strokeWidth="4" />
      <line x1="100" x2="100" y1="140" y2="155" stroke="white" strokeWidth="4" />
      <line x1="128.28" x2="138.89" y1="128.28" y2="138.89" stroke="white" strokeWidth="4" />
    </svg>
  );
};

export default SunIcon;