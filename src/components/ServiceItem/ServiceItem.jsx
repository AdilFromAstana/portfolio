import React, { useEffect, useState } from "react";
import "./ServiceItem.css";

const ServiceItem = ({ title, description, index, imageUrl }) => {
  const [visibility, setVisibility] = useState(0);
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // Новое состояние
  const [isMobile, setIsMobile] = useState(false);

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visiblePercentage = Math.min(
          Math.max(entry.intersectionRatio, 0),
          1
        );
        setVisibility(visiblePercentage); // Устанавливаем процент видимости
        if (visiblePercentage > 0.9) {
          setHasBeenVisible(true); // Если элемент виден больше чем на 50%, запоминаем это
        }
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
  }, [isMobile, index]);

  const opacityValue = hasBeenVisible ? 1 : Math.min(visibility * 2, 1); // Если элемент был видим, сохраняем полную непрозрачность
  const translateValue =
    hasBeenVisible || visibility >= 1
      ? `0%` // Если был видим, остаётся на месте
      : `${(1 - visibility) * 100}%`; // Плавное движение

  return (
    <div
      id={`service-${index}`}
      className="service-item"
      style={{
        transform: `translateX(${index % 2 === 0 ? "-" : ""}${translateValue})`,
        opacity: opacityValue,
        height: "25vh",
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
      {/* <img src={imageUrl} alt="" /> */}
    </div>
  );
};

export default ServiceItem;
