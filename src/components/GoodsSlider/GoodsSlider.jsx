import React, { useState, useRef } from "react";
import "./GoodsSlider.css";
import firstImg from "../../images/goods_silder/img1.png";
import secondImg from "../../images/goods_silder/img2.png";
import thirdImg from "../../images/goods_silder/img3.png";
import fourtImg from "../../images/goods_silder/img4.png";
import fifthImg from "../../images/goods_silder/img5.png";
import sixthImg from "../../images/goods_silder/img6.png";

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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, laborum cumque dignissimos quidem atque et eligendi
                  aperiam voluptates beatae maxime.
                </div>
                <button className="seeMore" onClick={handleSeeMore}>
                  SEE MORE &#8599;
                </button>
              </div>
              <div className="detail">
                <div className="title">Aerphone GHTK</div>
                <div className="des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor, reiciendis suscipit nobis nulla animi, modi explicabo
                  quod corrupti impedit illo, accusantium in eaque nam quia
                  adipisci aut distinctio porro eligendi. Reprehenderit nostrum
                  consequuntur ea! Accusamus architecto dolores modi ducimus
                  facilis quas voluptatibus! Tempora ratione accusantium magnam
                  nulla tenetur autem beatae.
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
                  <button>ADD TO CART</button>
                  <button>CHECKOUT</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={() => showSlider("prev")}>
            &lt;
          </button>
          <button id="next" onClick={() => showSlider("next")}>
            &gt;
          </button>
          <button id="back" onClick={handleBack}>
            See All &#8599;
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodsSlider;
