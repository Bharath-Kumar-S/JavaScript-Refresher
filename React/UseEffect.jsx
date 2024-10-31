// In this code, our effect sets up a window resize event listener, which triggers every time the window's width changes.
// But what if the MyComponent suddenly gets removed from the DOM? Our listener would still be active and may cause memory leaks.
// To prevent this, our effect returns a cleanup function, which removes the event listener when MyComponent is unmounted.

// So never forget, when performing tasks such as setting up a subscription in an effect,
// always provide a cleanup function to release resources if/when the component unmounts!

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [size, setSize] = useState(window.innerWidth);

  // Effect to update state
  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize); // Set up subscription

    // Cleanup function to remove subscription
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures the effect runs only once

  return (
    <div>
      <p>Window Size: {size} px</p>
    </div>
  );
}

export default MyComponent;
