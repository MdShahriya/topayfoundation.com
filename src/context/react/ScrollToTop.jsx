import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top after the page has fully loaded
    window.scrollTo(0, 0);
  }, [pathname]); // Scroll to top whenever the route changes

  return null;
};

export default ScrollToTop;
