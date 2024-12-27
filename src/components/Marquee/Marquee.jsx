import React from "react";
import "./Marquee.css";
import crmSystem from "../../images/crm_systems.png";
import onlineShoping from "../../images/online_shoping.png";
import personnelManagement from "../../images/personnel_management.png";
import dataVisulization from "../../images/data_visulization.png";
import selfPromotion from "../../images/self_promotion.png";
import booking from "../../images/booking.png";
import corporateWebsite from "../../images/corporateWebsite.png";
import subscription from "../../images/subscription.png";
import useWindowSize from "../../customHooks/useWindowWidth";

const Marquee = () => {
  const { width } = useWindowSize();
  const serviceCount = 4;
  const widthPercent = width <= 768 ? 90 : 50;
  const firstRowStartPosition = 125;
  const secondRowStartPosition = 100;

  const marqueeArray = [
    {
      id: "first",
      startPosition: `${firstRowStartPosition}%`,
      middlePosition: `-${
        widthPercent * serviceCount * 2 - firstRowStartPosition
      }%`,
      endPosition: `-${
        widthPercent * serviceCount * 2 - firstRowStartPosition
      }%`,
      services: [
        {
          imageUrl: crmSystem,
          title: "CRM-система",
          description:
            "Подходит для компаний, где необходимо автоматизировать управление клиентами. Если у вас розничная торговля, услуги или B2B-продажи, CRM поможет улучшить качество работы с клиентами, повысить продажи и систематизировать бизнес-процессы.",
        },
        {
          imageUrl: selfPromotion,
          title: "Сайт-визитка",
          description:
            "Идеально подходит для специалистов, личных брендов и небольших компаний. Сайт-визитка помогает рассказать о себе, своих услугах или бизнесе, предоставляя клиентам необходимую информацию быстро и удобно. Это отличный способ произвести первое впечатление и повысить доверие к вам или вашему проекту.",
        },
        {
          imageUrl: corporateWebsite,
          title: "Корпоративный сайт",
          description:
            "Решение для компаний, которые хотят представить свои услуги, миссию и бренд онлайн. Подходит для любого бизнеса, который стремится быть представленным в интернете и рассказать о себе больше.",
        },
        {
          imageUrl: onlineShoping,
          title: "Каталог товаров и меню",
          description:
            "Удобное решение для представления ассортимента товаров или блюд. Подходит для интернет-магазинов, ресторанов, кафе и других сфер бизнеса. Каталог позволяет клиентам быстро находить нужные позиции, просматривать описания, фотографии и цены, а также легко оформить заказ.",
        },
      ],
    },
    {
      id: "second",
      startPosition: `${secondRowStartPosition}%`,
      middlePosition: `-${
        widthPercent * serviceCount * 2 - secondRowStartPosition
      }%`,
      endPosition: `-${
        widthPercent * serviceCount * 2 - secondRowStartPosition
      }%`,
      services: [
        {
          imageUrl: booking,
          title: "Платформа бронирования",
          description:
            "Если ваш бизнес связан с арендой, записью или продажей временных слотов (например, аренда залов, салонов красоты или студий), платформа бронирования автоматизирует процесс записи и освобождает вас от рутинной работы.",
        },
        {
          imageUrl: subscription,
          title: "Сервисы подписки",
          description:
            "Идеально подходят для бизнеса, предоставляющего регулярные услуги или продукты. Сервисы подписки помогают управлять подписками, автоматизировать процесс выставления счетов и напоминаний, улучшая пользовательский опыт и лояльность клиентов.",
        },
        {
          imageUrl: personnelManagement,
          title: "Системы управления персоналом (HRM)",
          description:
            "Эффективное решение для компаний, которые хотят автоматизировать управление персоналом. Система HRM позволяет вести учет сотрудников, организовывать рабочие процессы, отслеживать производительность и улучшать внутренние коммуникации.",
        },
        {
          imageUrl: dataVisulization,
          title: "Дашборды и аналитика",
          description:
            "Простое и удобное решение для визуализации ключевых показателей бизнеса. Дашборды помогают анализировать продажи, поведение клиентов и эффективность процессов, предоставляя данные в реальном времени для принятия решений.",
        },
      ],
    },
  ];

  return (
    <div>
      {marqueeArray.map((marquee) => {
        return (
          <div
            key={marquee.id}
            className="marquee"
            style={{
              "--start-position": marquee.startPosition,
              "--middle-position": marquee.middlePosition,
              "--end-position": marquee.endPosition,
              "--service-count": `${serviceCount}`,
              "--width-percent": `${widthPercent}%`,
            }}
          >
            {["marqueeone", "marqueetwo", "marqueethree", "marqueefour"].map(
              (className) => {
                return (
                  <div className={className} key={className}>
                    {marquee.services.map((service) => {
                      return (
                        <div className="marquee-item" key={service.title}>
                          <div className="marquee-item-text">
                            <h2>{service.title}</h2>
                            <span>{service.description}</span>
                          </div>
                          <img src={service.imageUrl} alt="imageUrl" />
                        </div>
                      );
                    })}
                  </div>
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Marquee;
