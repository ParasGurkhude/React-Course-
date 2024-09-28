import React, { useState, useRef, useEffect } from 'react';
import '../styles/Timer.css'; // Import CSS

function Timer() {
  const [time, setTime] = useState(60); // Default 1 minute
  const [isActive, setIsActive] = useState(false);
  const [inputDuration, setInputDuration] = useState(60);
  const intervalRef = useRef(null); // For tracking the timer interval

  // Start timer
  const startTimer = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  };

  // Pause timer
  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsActive(false);
  };

  // Reset timer
  const resetTimer = () => {
    pauseTimer();
    setTime(inputDuration); // Reset to input duration
  };

  // Handle timer reaching zero
  useEffect(() => {
    if (time === 0 && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      alert("Time's up!"); // Notification feature
    }
  }, [time]);

  // Dynamic Background color change when time is < 10 seconds
  const dynamicBackgroundColor = () => {
    if (time <= 10) {
      return 'red';
    }
    return 'transparent';
  };

  // Input field for setting a new duration
  const handleInputChange = (e) => {
    setInputDuration(Number(e.target.value));
  };

  // Update time based on input duration
  const setNewDuration = () => {
    setTime(inputDuration);
  };

  // Format time for display
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="timer-container">
      <h2 className="timer-title">Timer</h2>

      {/* Display remaining time */}
      <div className="timer-display" style={{ backgroundColor: dynamicBackgroundColor() }}>
        <h1 className="timer-time">{formatTime(time)}</h1>
      </div>

      {/* Input for setting duration */}
      <div className="timer-input-container">
        <input
          type="number"
          value={inputDuration}
          onChange={handleInputChange}
          min="1"
          className="timer-input"
        />
        <button onClick={setNewDuration} className="timer-button">
          Set Duration
        </button>
      </div>

      {/* Start, Pause, and Reset buttons */}
      <div className="timer-controls">
        <button onClick={startTimer} disabled={isActive} className="timer-button">
          Start
        </button>
        <button onClick={pauseTimer} disabled={!isActive} className="timer-button">
          Pause
        </button>
        <button onClick={resetTimer} className="timer-button">
          Reset
        </button>
      </div>

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${(time / inputDuration) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export default Timer;
