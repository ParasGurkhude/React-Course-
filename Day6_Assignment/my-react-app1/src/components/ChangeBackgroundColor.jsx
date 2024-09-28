import React, { useRef } from 'react';

export const ChangeBackgroundColor =()=> {
    // Create a ref using useRef
    const divRef = useRef(null);
  
    // Function to change background color
    const handleClick = () => {
      divRef.current.style.backgroundColor = 'lightblue';
    };
  
    return (
      <div
        ref={divRef}
        onClick={handleClick}
        style={{ width: '200px', height: '200px', backgroundColor:'lightgray', cursor: 'pointer' }}
      >
        Click me to change my color!
      </div>
    );
}
  

  
