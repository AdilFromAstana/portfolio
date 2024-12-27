import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Marquee from "../Marquee/Marquee";
import Footer from "../Footer/Footer";
import ServiceList from "../ServiceList/ServiceList";

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

  const maxScroll = 1000; // Максимальное значение для анимации
  const scale = 1 + Math.min(scrollValue, maxScroll) / 1500; // Легкое увеличение масштаба
  const opacity =
    scrollValue < maxScroll
      ? Math.max(1 - scrollValue / maxScroll, 0)
      : Math.max(1 - maxScroll / maxScroll, 0); // Прозрачность до maxScroll

  return (
    <div className="app">
      {/* Параллакс секция */}
      <Header />
      <div className="main-section">
        <div
          className="photo-container"
          style={{
            transform: `scale(${scale}) translateY(-${scrollValue * 0.5}px)`, // Сдвиг изображения вниз
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

      <div className="content" id="content">
        <ServiceList />
        <Marquee />
        <Footer />
      </div>
    </div>
  );
};

export default ScrollEffect;
