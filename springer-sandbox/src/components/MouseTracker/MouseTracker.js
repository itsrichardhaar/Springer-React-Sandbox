import React, { useState } from 'react';
import styled from 'styled-components';

const GradientBackground = styled.div`
  background: ${({ gradient }) => gradient};
  transition: background 0.1s ease;
  width: 100%;
  height: 100%;
  position: absolute; /* Ensure it covers the entire area */
  top: 0;
  left: 0;
  pointer-events: none; /* Ensure it does not block mouse events */
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MouseTracker = ({ children }) => {
  const [gradient, setGradient] = useState('radial-gradient(600px at center, rgba(29, 78, 216, 0.15), transparent 80%)');

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    console.log(`Mouse position: (${x}, ${y})`); // Debugging log
    setGradient(`radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`);
  };

  return (
    <Container onMouseMove={handleMouseMove}>
      <GradientBackground gradient={gradient} />
      {children}
    </Container>
  );
};

export default MouseTracker;

