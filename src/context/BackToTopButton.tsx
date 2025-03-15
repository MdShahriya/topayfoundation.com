import React, { useState, useEffect, useRef } from 'react';
import '../styles/BackToTopButton.css';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tickingRef = useRef(false); // Using useRef to persist the value between renders

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 200);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button className="back-to-top" onClick={scrollToTop}>
      ↑
    </button>
  ) : null;
};

export default BackToTopButton;