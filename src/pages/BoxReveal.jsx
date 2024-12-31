import React, { useRef, useEffect, useState } from 'react';

const BoxReveal = ({ children, animationDuration = "0.5s", triggerOffset = 100 }) => {
  const revealRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if the device is desktop or mobile
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    checkDevice(); // Initial check
    window.addEventListener('resize', checkDevice); // Update on window resize

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setIsVisible(true); // Immediately set visible on mobile
      return;
    }

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
  }, [triggerOffset, isDesktop]);

  return (
    <div
      ref={revealRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isDesktop && !isVisible ? 'translateY(20px)' : 'translateY(0)',
        transition: isDesktop
          ? `opacity ${animationDuration} ease-out, transform ${animationDuration} ease-out`
          : 'none', // No transition on mobile
      }}
    >
      {children}
    </div>
  );
};

export default BoxReveal;
