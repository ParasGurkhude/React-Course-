import React, { useRef, useState } from 'react';

export const UnControlledInput = () => {
    const inputRef = useRef('');
    const [inputValue, setInputValue] = useState('');

    // console.log('first')
    const handleInputChange = () => {
        setInputValue(inputRef.current.value);
    };

    return (
        <div>
        <input
            ref={inputRef}
            type="text"
            onChange={handleInputChange}
            placeholder="Type something..."
        />
        <p>Current Value: {inputValue}</p>
        </div>
    );
}
