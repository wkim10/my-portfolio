"use client";

import React, { ReactNode, useState, useEffect } from "react";

interface GradientDivProps {
  children: ReactNode;
  className: string;
}

const useIsLgScreen = () => {
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLgScreen;
};

const useGradientPosition = (isLgScreen: boolean) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    const updateScrollPosition = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    if (isLgScreen) {
      window.addEventListener("mousemove", updateMousePosition);
    }

    window.addEventListener("scroll", updateScrollPosition);

    // Initial update of scroll position
    updateScrollPosition();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, [isLgScreen]);

  return {
    x: mousePosition.x + scrollPosition.x,
    y: mousePosition.y + scrollPosition.y,
  };
};

const GradientDiv: React.FC<GradientDivProps> = ({ children, className }) => {
  const isLgScreen = useIsLgScreen();
  const gradientPosition = useGradientPosition(isLgScreen);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(134, 93, 255, 0.2), rgba(0, 0, 0, 0) 50%)`,
      }}
    >
      {children}
    </div>
  );
};

export default GradientDiv;
