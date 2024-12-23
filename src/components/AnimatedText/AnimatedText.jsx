import React, { useState, useEffect } from "react";
import "./AnimatedText.css";

const AnimatedText = ({ words, interval }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div style={{ position: "fixed", top: "20px", left: "20px", zIndex: 1100 }}>
      <div className="static-text" style={{ fontSize: "3rem" }}>
        Hello
      </div>
      <div className="animated-text">
        <div
          className="text-wrapper"
          style={{
            transform: `translateY(-${
              currentWordIndex * (100 / words.length)
            }%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {words.map((word, index) => (
            <div key={index} className="text">
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
