import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/react/NotificationProvider';
import BackToTopButton from './context/react/BackToTopButton';
import ScrollToTop from './context/react/ScrollToTop';
import Loading from './Components/Loading';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';

// Import Header & Footer (prevent unnecessary re-renders)
import Header from './Components/Header';
import Footer from './Components/Footer';

// Lazy Load Frequently Used Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Roadmap = React.lazy(() => import('./pages/Roadmap'));
const Projects = React.lazy(() => import('./pages/Projects'));

// Load Rarely Used Pages Normally
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsOfService from './Components/TermsOfService';
import License from './pages/License';
import Invest from './pages/Invest';
import Brand from './pages/BrandingPage';

function App() {
  return (
    <NotificationProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <div className="page-container">
          <Header />

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

          <Footer />
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
