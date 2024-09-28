import React, { useRef } from 'react';

const DynamicForm = () => {
  const inputRefs = useRef([]);

  const focusInput = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <form>
      {['First Name', 'Last Name', 'Email'].map((label, index) => (
        <div key={index}>
          <label>{label}
            <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                onFocus={() => focusInput(index)}
            />
          </label>
        </div>
      ))}
    </form>
  );
};

export default DynamicForm;
