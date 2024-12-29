import React, { useState, useEffect } from "react";
import ScrollEffect from "./components/ScrollEffect/ScrollEffect";
import "./App.css";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Function to check if all images are loaded
  const checkImagesLoaded = () => {
    const images = document.querySelectorAll("img"); // Select all images on the page
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      // No images to load
      setImagesLoaded(true);
      return;
    }

    images.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        loadedCount++;
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        });
        img.addEventListener("error", () => {
          // Count as loaded even if there was an error
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        });
      }
    });
  };

  // UseEffect to trigger image loading check
  useEffect(() => {
    checkImagesLoaded();
  }, []);

  return (
    <div>
      {!imagesLoaded && <div className="loading">Loading...</div>}
      {imagesLoaded && <ScrollEffect />}
    </div>
  );
}

export default App;
