import React from "react";
import  { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const BoxReveal = ({ children, animationDuration = "0.5s", triggerOffset = 100 }) => {
  const revealRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Unobserve after first intersection
        }
      },
      { rootMargin: `0px 0px -${triggerOffset}px 0px` }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerOffset]);

  return (
    <div
      ref={revealRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity ${animationDuration} ease-out, transform ${animationDuration} ease-out`,
      }}
    >
      {children}
    </div>
  );
};

// Add PropTypes for validation
BoxReveal.propTypes = {
  children: PropTypes.node.isRequired,
  animationDuration: PropTypes.string,
  triggerOffset: PropTypes.number,
};

export default BoxReveal;
