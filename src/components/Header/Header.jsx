import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import AnimatedText from "../AnimatedText/AnimatedText";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Состояние для изменения фона

  const handleMenuToggle = () => {
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuContent = document.querySelector(".menu-content");

    if (isMenuOpen) {
      // Close menu
      gsap.to(menuContent, { opacity: 0, duration: 0.5 });
      gsap.to(menuOverlay, {
        y: "100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          menuOverlay.style.transform = "translateY(-100%)";
        },
      });
      setIsMenuOpen(false);
    } else {
      // Open menu
      gsap.set(menuOverlay, { y: "-100%" });
      gsap.to(menuOverlay, { y: "0%", duration: 1, ease: "power2.inOut" });
      gsap.to(menuContent, { opacity: 1, duration: 0.5, delay: 0.5 });
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Проверяем при первой загрузке
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const targetComponent = document.querySelector("#content"); // Ваш целевой компонент
      const targetPosition = targetComponent?.getBoundingClientRect().top || 0;

      // Если верхняя граница компонента пересекает верх экрана
      setIsScrolled(targetPosition <= 64); // 64px — высота хедера
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <AnimatedText isScrolled={isScrolled} />
        <button className="menu-button" onClick={handleMenuToggle}>
          {isMobile ? (
            <div className="burger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : isMenuOpen ? (
            "Close Menu"
          ) : (
            "Open Menu"
          )}
        </button>
      </div>
      <div className="menu-overlay">
        <div className="menu-content">
          <button>Option 1</button>
          <button>Option 2</button>
          <button>Option 3</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
