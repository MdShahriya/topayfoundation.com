import React, { useState, useEffect } from 'react';
import '../../styles/BackToTopButton.css';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  let ticking = false; // Prevents excessive function calls

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 200);
          ticking = false;
        });
        ticking = true;
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