import { useState, useEffect } from "react";

export default function PortfolioGallery() {
  const [photoLabel, setPhotoLabel] = useState("Loading...");

  useEffect(() => {
    const loadPhotoInfo = () => {
      return new Promise((resolve) =>
        setTimeout(() => resolve("Astrophotography Collection"), 1000)
      );
    };

    loadPhotoInfo().then((label) => setPhotoLabel(label)); // Setting state outside the async function

    return () => setPhotoLabel("Loading...");
  }, []);

  return <h1>{photoLabel}</h1>;
}
