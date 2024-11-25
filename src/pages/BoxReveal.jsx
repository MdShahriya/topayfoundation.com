import React, { useRef, useEffect, useState } from 'react';

const BoxReveal = ({ children, animationDuration = "1s", triggerOffset = 100 }) => {
  const revealRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!revealRef.current) return;
      const rect = revealRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight - triggerOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerOffset]);

  return (
    <div
      ref={revealRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${animationDuration} ease-out, transform ${animationDuration} ease-out`,
      }}
    >
      {children}
    </div>
  );
};

export default BoxReveal;
