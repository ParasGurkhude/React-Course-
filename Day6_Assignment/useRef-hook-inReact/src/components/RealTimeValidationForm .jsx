import React, { useRef, useState } from 'react';

const RealTimeValidationForm = () => {
  const inputRefs = useRef([]);
  const [validationMessages, setValidationMessages] = useState([]);

  const validateInput = (index) => {
    const value = inputRefs.current[index].value;
    let message = '';
    if (value.length < 5) {
      message = 'Input must be at least 5 characters long';
    }
    setValidationMessages((prev) => {
      const newMessages = [...prev];
      newMessages[index] = message;
      return newMessages;
    });
  };

  return (
    <form>
      {['Username', 'Password'].map((label, index) => (
        <div key={index}>
          <label>{label}
            <input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                onChange={() => validateInput(index)}
            />
          </label>
          {validationMessages[index] && (
            <span>{validationMessages[index]}</span>
          )}
        </div>
      ))}
    </form>
  );
};

export default RealTimeValidationForm;
