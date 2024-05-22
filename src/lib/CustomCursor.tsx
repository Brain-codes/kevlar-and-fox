import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setVisible(true);
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const cursorStyle: React.CSSProperties = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "white",
    // mixBlendMode: "difference",
    position: "fixed",
    zIndex: 9999,
    pointerEvents: "none",
    transition: "transform 0.2s ease-out",
    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) translate(-50%, -50%)`,
    opacity: visible ? 1 : 0,
  };

  return <div style={cursorStyle} aria-hidden="true" />;
};

export default CustomCursor;
