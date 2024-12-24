import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import ServiceItem from "../ServiceItem/ServiceItem";

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

  const services = [
    {
      title: "CRM-система",
      description:
        "Подходит для компаний, где необходимо автоматизировать управление клиентами. Если у вас розничная торговля, услуги или B2B-продажи, CRM поможет улучшить качество работы с клиентами, повысить продажи и систематизировать бизнес-процессы.",
    },
    {
      title: "Лендинг",
      description:
        "Идеально для стартапов, рекламных кампаний и презентации одного продукта или услуги. Лендинг помогает привлечь внимание клиентов и сконцентрировать их на одном целевом действии: покупке, регистрации или подписке.",
    },
    {
      title: "Корпоративный сайт",
      description:
        "Решение для компаний, которые хотят представить свои услуги, миссию и бренд онлайн. Подходит для любого бизнеса, который стремится быть представленным в интернете и рассказать о себе больше.",
    },
    {
      title: "Интернет-магазин",
      description:
        "Для тех, кто хочет продавать товары или услуги онлайн. Интернет-магазин автоматизирует процесс покупок, интегрируется с платежными системами и помогает увеличивать онлайн-продажи.",
    },
    {
      title: "Платформа бронирования",
      description:
        "Если ваш бизнес связан с арендой, записью или продажей временных слотов (например, аренда залов, салонов красоты или студий), платформа бронирования автоматизирует процесс записи и освобождает вас от рутинной работы.",
    },
  ];

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
        <h1>Welcome to the next section</h1>
        <p>Keep scrolling to explore more content!</p>
        <div className="services-section">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollEffect;
