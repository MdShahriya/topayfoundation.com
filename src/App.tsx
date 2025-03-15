import React, { Suspense, useState, useEffect, useRef, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationProvider';
import BackToTopButton from './context/BackToTopButton';
import ScrollToTop from './context/ScrollToTop';
import Loading from './context/Loading';
import { FaLinkedin, FaTelegram, FaGithub, FaTwitter, FaMedium, FaSun, FaMoon } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';

// Define theme type
type ThemeType = 'light' | 'dark';

// Create Theme Context with TypeScript
interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

// Lazy Load Frequently Used Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Roadmap = React.lazy(() => import('./pages/Roadmap'));
const Projects = React.lazy(() => import('./pages/Projects'));

// Load Rarely Used Pages Normally
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import License from './pages/License';
import Invest from './pages/Invest';
import Brand from './pages/Brandingpage';

// Header Component Props
interface HeaderProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

// Header Component (moved from separate file)
const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // setIsOpen(false);  // Not used anymore
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/roadmap', label: 'Roadmap' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="/images/Logo.webp" className="logo-image" alt="Logo" />
        </Link>
      </div>

      <nav ref={menuRef} className="nav">
        <ul>
          {navLinks.map(
            (link) =>
              link.path !== location.pathname && (
                <li key={link.path}>
                  <Link to={link.path}>
                    <strong>{link.label}</strong>
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>
      
      <div className="header-actions">
        <button 
          onClick={toggleTheme} 
          className="theme-toggle-btn"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        
        <div className="dashboard-btn-container">
          <a 
            href="https://dashboard.topayfoundation.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dashboard-btn"
          >
            Dashboard
          </a>
        </div>
      </div>
    </header>
  );
};

// Footer Component Props
interface FooterProps {
  theme: ThemeType;
}

// Footer Component (moved from separate file)
const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`footer ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="footer-content">
        {/* Get Started Section */}
        <div className="footer-section">
          <h4>Get Started</h4>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/invest">Invest us</Link>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h4>Resources</h4>
          <a
            href="https://docs.topayfoundation.com/docs/resources/whitepaper"
            target="_blank"
            rel="noopener noreferrer"
            title="Read the WhitePaper"
          >
            WhitePaper
          </a>
          <a
            href="https://docs.topayfoundation.com/docs/resources/tokenomics"
            target="_blank"
            rel="noopener noreferrer"
            title="Check Tokenomics"
          >
            Tokenomics
          </a>
          <a
            href="https://docs.topayfoundation.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            title="Read our Blog"
          >
            Blog
          </a>
        </div>
        <div className="footer-section">
          <h4>Security Resources</h4>
          <Link to="/licenses">Licenses & Registrations</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms and Conditions</Link>
        </div>
        {/* Community Section */}
        <div className="footer-section">
          <h4>Community</h4>
          <Link to="https://linktr.ee/topay_foundation">Linktree</Link>
          <Link to="https://patreon.com/topayfoundation?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink">
            Patreon
          </Link>
        </div>
        <div className="footer-section">
          <h4>Developer Resources</h4>
          <Link to="/brand">Brand</Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-logo">
          Operated by{" "}
          <a
            href="https://society.topayfoundation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <strong>TOPAY SOCIETY</strong>
          </a>
        </p>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/company/105530643/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/TOPAYfoundation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
          <a
            href="https://github.com/TOPAY-FOUNDATION"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/TOPAYFoundation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://medium.com/@topayfoundation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Return saved theme or system preference
    return savedTheme || (prefersDark ? 'dark' : 'light');
  });

  const toggleTheme = () => {
    const newTheme: ThemeType = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme to body element
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NotificationProvider>
        <Router>
          <ScrollToTop />
          <div className={`page-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
            <Header theme={theme} toggleTheme={toggleTheme} />

            <div className="content">
              <Routes>
                <Route path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
                <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
                <Route path="/services" element={<Suspense fallback={<Loading />}><Services /></Suspense>} />
                <Route path="/roadmap" element={<Suspense fallback={<Loading />}><Roadmap /></Suspense>} />
                <Route path="/projects" element={<Suspense fallback={<Loading />}><Projects /></Suspense>} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/licenses" element={<License />} />
                <Route path="/invest" element={<Invest />} />
                <Route path="/brand" element={<Brand />} />
              </Routes>
              <BackToTopButton />
            </div>

            <Footer theme={theme} />
          </div>
        </Router>
      </NotificationProvider>
    </ThemeContext.Provider>
  );
}

export default App;