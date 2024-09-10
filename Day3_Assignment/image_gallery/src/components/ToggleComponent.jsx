import React, { useEffect, useState } from 'react';

function ToggleComponent() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <ChildComponent />}
    </div>
  );
}

function ChildComponent() {
  useEffect(() => {
    return () => {
      console.log("ChildComponent unmounted");
    };
  }, []);

  return <h1>Child Component</h1>;
}

export default ToggleComponent;

