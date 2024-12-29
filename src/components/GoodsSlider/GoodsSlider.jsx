import React, { useState, useRef } from "react";
import "./GoodsSlider.css";
import firstImg from "../../images/goods_silder/img1.png";
import secondImg from "../../images/goods_silder/img2.png";
import thirdImg from "../../images/goods_silder/img3.png";
import fourtImg from "../../images/goods_silder/img4.png";
import fifthImg from "../../images/goods_silder/img5.png";
import sixthImg from "../../images/goods_silder/img6.png";
import { AiOutlineUpCircle } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";

const GoodsSlider = () => {
  const goods = [
    {
      id: 1,
      imageUrl: firstImg,
    },
    {
      id: 2,
      imageUrl: secondImg,
    },
    {
      id: 3,
      imageUrl: thirdImg,
    },
    {
      id: 4,
      imageUrl: fourtImg,
    },
    {
      id: 5,
      imageUrl: fifthImg,
    },
    {
      id: 6,
      imageUrl: sixthImg,
    },
  ];

  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const [isClickable, setIsClickable] = useState(true);

  const showSlider = (type) => {
    if (!isClickable) return;
    setIsClickable(false);

    const carousel = carouselRef.current;
    const listHTML = listRef.current;
    const items = listHTML.querySelectorAll(".item");

    carousel.classList.remove("next", "prev");

    if (type === "next") {
      listHTML.appendChild(items[0]);
      carousel.classList.add("next");
    } else {
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add("prev");
    }

    setTimeout(() => {
      setIsClickable(true);
    }, 2000);
  };

  const handleSeeMore = () => {
    const carousel = carouselRef.current;
    carousel.classList.remove("next", "prev");
    carousel.classList.add("showDetail");
  };

  const handleBack = () => {
    const carousel = carouselRef.current;
    carousel.classList.remove("showDetail");
  };

  return (
    <div style={{ padding: "10vh 0px" }} className="carousel-wrapper">
      <div className="title">
        <h2>Это мог быть католог вашей продукции</h2>
      </div>
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {goods.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.imageUrl} alt={`Slide ${item.id}`} />
              <div className="introduce">
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">Aerphone</div>
                <div className="des">
                  Высококачественные наушники с чистым звучанием, стильным
                  дизайном и удобной посадкой. Идеальны для музыки, фильмов и
                  игр. Прочные материалы, современный стиль и внимание к деталям
                  делают их незаменимыми.
                </div>
                <button className="seeMore" onClick={handleSeeMore}>
                  Детали <GoArrowUpRight />
                </button>
              </div>
              <div className="detail">
                <div className="detail-col">
                  <div className="title">Aerphone GHTK</div>
                  <div className="des">
                    Высококачественные наушники с чистым звучанием, стильным
                    дизайном и удобной посадкой. Идеальны для музыки, фильмов и
                    игр. Прочные материалы, современный стиль и внимание к
                    деталям делают их незаменимыми.
                  </div>
                  <div className="specifications">
                    {[
                      { label: "Used Time", value: "6 hours" },
                      { label: "Charging port", value: "Type-C" },
                      { label: "Compatible", value: "Android" },
                      { label: "Bluetooth", value: "5.3" },
                      { label: "Controlled", value: "Touch" },
                    ].map((spec, specIndex) => (
                      <div key={specIndex}>
                        <p>{spec.label}</p>
                        <p>{spec.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="checkout">
                    <button>В КОРЗИНУ</button>
                    <button>КУПИТЬ СЕЙЧАС</button>
                  </div>
                </div>
                <div className="mobile-specifications">
                  {[
                    { label: "Время работы", value: "6 часов" },
                    { label: "Bluetooth", value: "5.3" },
                    { label: "Совместимость", value: "Android" },
                  ].map((spec, specIndex) => (
                    <div key={specIndex}>
                      <p>{spec.label}</p>
                      <p>{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={() => showSlider("prev")}>
            <AiOutlineUpCircle
              style={{ rotate: "-90deg", color: "white", fontSize: "2.5rem" }}
            />
          </button>
          <button id="next" onClick={() => showSlider("next")}>
            <AiOutlineUpCircle
              style={{ rotate: "90deg", color: "white", fontSize: "2.5rem" }}
            />
          </button>
          <button id="back" onClick={handleBack}>
            Каталог <GoArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodsSlider;
