import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/react/NotificationProvider';
import BackToTopButton from './Components/BackToTopButton';
import ScrollToTop from './Components/ScrollToTop';
import Loading from './Components/Loading';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';

// Lazy Load Components
const Header = React.lazy(() => import('./Components/Header'));
const Footer = React.lazy(() => import('./Components/Footer'));

// Lazy Load Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Roadmap = React.lazy(() => import('./pages/Roadmap'));
const PrivacyPolicy = React.lazy(() => import('./Components/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./Components/TermsOfService'));
const Projects = React.lazy(() => import('./pages/Projects'));
const License = React.lazy(() => import('./pages/License'));
const Invest = React.lazy(() => import('./pages/Invest'));
const Brand = React.lazy(() => import('./pages/BrandingPage'));

function App() {
  return (
    <NotificationProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="page-container">
          {/* Lazy Loaded Header */}
          <Suspense fallback={<Loading />}>
            <Header />
          </Suspense>

          <div className="content">
            <Suspense fallback={<Loading />}>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/licenses" element={<License />} />
                <Route path="/invest" element={<Invest />} />
                <Route path="/brand" element={<Brand />} />
              </Routes>
            </Suspense>
            <BackToTopButton />
          </div>

          {/* Lazy Loaded Footer */}
          <Suspense fallback={<Loading />}>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
