import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  };


  

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
    
  }, []);

  return (
    <div>
      <h1>Mouse Tracker</h1>
      <p>Move your mouse around!</p>
      <p>Mouse X: {mousePosition.x}, Mouse Y: {mousePosition.y}</p>
    </div>
  );
};

export default MouseTracker;
