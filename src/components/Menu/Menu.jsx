import React, { useState } from "react";
import { gsap } from "gsap";
import "./Menu.css"; // Перенесем стили в CSS файл
import AnimatedText from "../AnimatedText/AnimatedText";

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      <div>
        <AnimatedText />
        <button className="menu-button" onClick={handleMenuToggle}>
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>
      <div className="menu-overlay">
        <div className="menu-content">
          <button>Option 1</button>
          <button>Option 2</button>
          <button>Option 3</button>
        </div>
      </div>
    </>
  );
};

export default MenuButton;
