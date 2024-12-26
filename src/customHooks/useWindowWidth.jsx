import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    isMobile: window.innerWidth <= 768,
    isDesktop: window.innerWidth > 768,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowSize({
        width: newWidth,
        isMobile: newWidth <= 768,
        isDesktop: newWidth > 768,
      });
    };

    window.addEventListener("resize", handleResize); // Слушаем изменение размера окна
    return () => {
      window.removeEventListener("resize", handleResize); // Убираем слушатель при размонтировании
    };
  }, []);

  return windowSize; // Возвращаем объект с шириной и состояниями
};

export default useWindowSize;
