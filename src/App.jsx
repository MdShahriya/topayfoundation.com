import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/react/NotificationProvider';
import BackToTopButton from './context/react/BackToTopButton';
import ScrollToTop from './context/react/ScrollToTop';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';

// Import Header & Footer (prevent unnecessary re-renders)
import Header from './Components/Header';
import Footer from './Components/Footer';

// Import All Pages Normally (No Lazy Loading)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Roadmap from './pages/Roadmap';
import Projects from './pages/Projects';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsOfService from './Components/TermsOfService';
import License from './pages/License';
import Invest from './pages/Invest';
import Brand from './pages/BrandingPage';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <ScrollToTop />
        <div className="page-container">
          <Header />

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/licenses" element={<License />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/brand" element={<Brand />} />
            </Routes>
            <BackToTopButton />
          </div>

          <Footer />
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
