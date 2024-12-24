import React, { useState, useEffect } from "react";
import "./AnimatedText.css";

const AnimatedText = ({ isScrolled }) => {
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
    <div className="animated-text-container">
      <div className={`${isScrolled ? "black-text" : "white-text"}`}>
        Сохраню вам
      </div>
      <div className="animated-text">
        <div
          className="text-wrapper"
          style={{
            transform: `translateY(-${
              currentWordIndex * (100 / words.length)
            }%)`,
          }}
        >
          {words.map((word, index) => (
            <div
              key={index}
              className={`text ${isScrolled ? "black-text" : "white-text"}`}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
