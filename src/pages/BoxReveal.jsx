/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import  { useEffect, useRef, useState } from 'react';

const BoxReveal = ({ children, animationDuration = "0.5s", triggerOffset = 100 }) => {
  const revealRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: `0px 0px -${triggerOffset}px 0px`,
      }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => {
      if (revealRef.current) {
        observer.unobserve(revealRef.current);
      }
    };
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
