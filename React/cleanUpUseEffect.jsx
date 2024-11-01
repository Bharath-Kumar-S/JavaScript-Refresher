import { useState, useEffect } from "react";

export default function Gallery() {
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageCount((currentCount) => currentCount + 1);
    }, 2000);

    // TODO: Add a cleanup function here
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>Images in gallery: {imageCount}</div>;
}

// let's ensure your Photography Portfolio Website is tidy and efficient.
//  Modify the useEffect hook so that it clears the interval when the Gallery component unmounts.
//   This will prevent any memory leaks.
