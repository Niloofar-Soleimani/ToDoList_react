
import reactDom from "react-dom";
import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(); // Formats the time as HH:MM:SS
  };

  return (
    <div style={styles.clockContainer}>
      <h1 style={styles.clock}>{formatTime(time)}</h1>
    </div>
  );
};

const styles = {
  clockContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    backgroundColor: "#282c34",
  },
  clock: {
    color: "#61dafb",
    fontSize: "48px",
  },
};

export default DigitalClock;