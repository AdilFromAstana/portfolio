import React, { useEffect, useState } from "react";

const ScrollEffect = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY); // Обновляем значение скролла
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.max(1 - scrollValue / 300, 0); // Прозрачность
  const scale = 1 + scrollValue / 1000; // Легкое увеличение масштаба
  const translateY = scrollValue * 0.5; // Параллакс-движение вверх

  return (
    <div className="app">
      {/* Параллакс секция */}
      <div className="main-section">
        <div
          className="photo-container"
          style={{
            transform: `scale(${scale}) translateY(-${translateY}px)`,
            opacity: opacity,
            transition: "transform 0.1s ease, opacity 0.1s ease",
          }}
        >
          <img
            src="https://kulbachny.com/wp-content/uploads/2019/12/ilya-kulbachny.jpg"
            alt="Ilya Kulbachny"
            className="person-photo"
          />
        </div>
      </div>

      {/* Контент после параллакса */}
      <div className="content">
        <h1>Welcome to the next section</h1>
        <p>Keep scrolling to explore more content!</p>
      </div>
    </div>
  );
};

export default ScrollEffect;
