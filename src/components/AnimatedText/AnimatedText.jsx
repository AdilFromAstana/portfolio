import React, { useState, useEffect } from "react";
import "./AnimatedText.css";

const AnimatedText = () => {
  const interval = 2000;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["деньги!", "нервы!", "настроение!", "энергию!", "время!"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 1100,
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        gap: "8px",
      }}
    >
      <div style={{ fontSize: "2rem", color: "white" }}>Сохраню вам</div>
      <div className="animated-text">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            transform: `translateY(-${
              currentWordIndex * (100 / words.length)
            }%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {words.map((word, index) => (
            <div key={index} className="text" style={{ color: "white" }}>
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
