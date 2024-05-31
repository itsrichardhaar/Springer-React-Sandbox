import React, { useState } from 'react';
import styled from 'styled-components';

const GradientBackground = styled.div`
  background: ${({ gradient }) => gradient};
  transition: background 0.1s ease;
  width: 100%;
  height: 100%;
  position: fixed; /* Cover the entire viewport */
  top: 0;
  left: 0;
  pointer-events: none; /* Ensure it does not block mouse events */
  z-index: -1; /* Place it behind other content */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MouseTracker = ({ children }) => {
  const [gradient, setGradient] = useState('radial-gradient(600px at center, rgba(29, 78, 216, 0.15), transparent 80%)');

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setGradient(`radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`);
  };

  return (
    <Container onMouseMove={handleMouseMove}>
      <GradientBackground gradient={gradient} />
      {children}
    </Container>
  );
};

export default MouseTracker;

