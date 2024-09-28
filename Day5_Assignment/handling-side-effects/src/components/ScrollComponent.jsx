import React, { useState, useEffect } from 'react';

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll Position: {scrollPosition}px</h1>
    </div>
  );
};

export default ScrollComponent;
