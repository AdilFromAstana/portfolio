import React, { useEffect, useState } from "react";
import "./ServiceItem.css";

const ServiceItem = ({ title, description, index }) => {
  const [visibility, setVisibility] = useState(0); // Процент видимости элемента

  useEffect(() => {
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
  }, [index]);

  const opacityValue = Math.min(visibility * 2, 1); // Плавное увеличение прозрачности
  const translateValue =
    visibility < 0.5
      ? `${(1 - visibility) * 80}%` // Двигается меньше на первых 50%
      : `45%`; // Останавливается на 30% ширины

  return (
    <div
      id={`service-${index}`}
      className="service-item"
      style={{
        transform: `translateX(${index % 2 === 0 ? "-" : ""}${translateValue})`,
        opacity: opacityValue,
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
