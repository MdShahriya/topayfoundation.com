import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a 1-second delay before scrolling to top
    const timeoutId = setTimeout(() => {
      // Force scroll to absolute top (0,0)
      window.scrollTo(0, 0);
      
      // For browsers that might have issues with the above
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 250);
    
    // Clear timeout if component unmounts or route changes again
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;