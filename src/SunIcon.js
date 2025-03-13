import React from 'react';

const SunIcon = ({ style, width = "50", height = "50", beamWidth = 4, sunRadius = 30, beamCount = 8, beamStartOffset = 1, beamEndLength = 15 }) => {
  // Convert props to numbers
  const numericSunRadius = Number(sunRadius);
  const numericBeamStartOffset = Number(beamStartOffset);
  const numericBeamEndLength = Number(beamEndLength);
  const numericBeamCount = Number(beamCount);
  const numericBeamWidth = Number(beamWidth);

  // Calculate beam positions
  const beams = [];
  const centerX = 100;
  const centerY = 100;

  for (let i = 0; i < numericBeamCount; i++) {
    const angle = (2 * Math.PI * i) / numericBeamCount; // Evenly spaced angles

    // Start point: just outside the circle plus the offset
    const startRadius = numericSunRadius + numericBeamStartOffset;
    const startX = centerX + startRadius * Math.cos(angle);
    const startY = centerY - startRadius * Math.sin(angle); // Negative for SVG y-axis

    // End point: start point plus the uniform beam length
    const endX = startX + numericBeamEndLength * Math.cos(angle);
    const endY = startY - numericBeamEndLength * Math.sin(angle);

    // Debugging logs for the first beam
    if (i === 0) {
      console.log("sunRadius: " + numericSunRadius);
      console.log("beamStartOffset: " + numericBeamStartOffset);
      console.log("angle: " + angle);
      console.log("centerX: " + centerX);
      console.log("centerY: " + centerY);
      console.log("startX: " + startX);
      console.log("startY: " + startY);
      console.log("endX: " + endX);
      console.log("endY: " + endY);
    }

    beams.push(
      <line
        key={i}
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="white"
        strokeWidth={numericBeamWidth}
      />
    );
  }

  return (
    <svg
      height={height}
      width={width}
      style={{ ...style }}
      viewBox="0 0 200 200" // Centered at (100,100)
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r={numericSunRadius} fill="white" stroke="white" strokeWidth="1" />
      {beams}
    </svg>
  );
};

export default SunIcon;