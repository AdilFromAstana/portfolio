import React, { useEffect, useState } from "react";
import "./ServiceItem.css";

const ServiceItem = ({ title, description, index, imageUrl }) => {
  const [visibility, setVisibility] = useState(0); // Процент видимости элемента
  const [isMobile, setIsMobile] = useState(false); // Состояние для мобильного устройства

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Проверяем, мобильное ли устройство
    };

    handleResize(); // Проверяем при загрузке
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const visiblePercentage = Math.min(
            Math.max(entry.intersectionRatio, 0),
            1
          );
          setVisibility(visiblePercentage); // Устанавливаем процент видимости
        },
        {
          threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Генерируем массив от 0 до 1 с шагом 0.01
        }
      );

      const element = document.querySelector(`#service-${index}`);
      if (element) observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
    }
  }, [index]);

  const opacityValue = Math.min(visibility * 2, 1); // Плавное увеличение прозрачности
  const translateValue =
    visibility < 0.5
      ? `${(1 - visibility) * 80}%` // Двигается меньше на первых 50%
      : isMobile
        ? `0%` // Для телефонов
        : `45%`; // Для больших экранов

  return (
    <div
      id={`service-${index}`}
      className="service-item"
      style={{
        transform: isMobile ? 'inherit' : `translateX(${index % 2 === 0 ? "-" : ""}${translateValue})`,
        opacity: isMobile ? '1' : opacityValue,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ServiceItem;
