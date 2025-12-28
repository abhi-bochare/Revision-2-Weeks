import { useState, useEffect } from "react";

function WindowResizeTracker() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDeviceType = () => {
    if (size.width < 768) return "Mobile";
    if (size.width <= 1024) return "Tablet";
    return "Desktop";
  };

  return (
    <div>
      <h3>
        Window Size: {size.width} * {size.height}
      </h3>
      <h2>{getDeviceType()}</h2>
    </div>
  );
}

export default WindowResizeTracker;
