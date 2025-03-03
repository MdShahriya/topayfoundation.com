import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 50); // Add a short delay (50ms) to ensure page has rendered

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
