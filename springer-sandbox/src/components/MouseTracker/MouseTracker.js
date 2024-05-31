import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GradientBackground = styled.div`
  background: ${({ gradient }) => gradient};
  transition: background 0.1s ease;
  width: 100%;
  height: 100%;
`;

const MouseTracker = ({ children }) => {
  const [gradient, setGradient] = useState('radial-gradient(600px at center, rgba(29, 78, 216, 0.15), transparent 80%)');

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    setGradient(`radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`);
  };

  return (
    <GradientBackground gradient={gradient} onMouseMove={handleMouseMove}>
      {children}
    </GradientBackground>
  );
};

export default MouseTracker;
