import React, { useState, useRef } from 'react';
import '../styes/OTPinput.css'

const OTPInput = () => {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputRefs = useRef([]);

    // Handle input change
    const handleChange = (element, index) => {
        const value = element.target.value;

        // Only allow digits
        if (/[^0-9]/.test(value)) return;

        let newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Handle backspace for deleting and focusing previous input
    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Handle pasting OTP
    const handlePaste = (event) => {
        event.preventDefault();
        const pasteData = event.clipboardData.getData("text").slice(0, 6).split("");

        if (/^\d+$/.test(pasteData.join(""))) {
            setOtp(pasteData);

            pasteData.forEach((value, index) => {
                if (inputRefs.current[index]) {
                    inputRefs.current[index].value = value;
                    if (index < 5) inputRefs.current[index + 1].focus();
                }
            });
        }
    };

    // Submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Entered OTP: ${otp.join("")}`);
    };

    return (
        <form onSubmit={handleSubmit} className="otp-container">
            {otp.map((data, index) => (
                <input
                    key={index}
                    type="text"
                    name={`otp${index}`}
                    maxLength="1"
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    ref={(ref) => inputRefs.current[index] = ref}
                    className="otp-input"
                />
            ))}
            <button type="submit" disabled={otp.includes("")} className="submit-btn">
                Submit OTP
            </button>
        </form>
    );
};

export default OTPInput;
