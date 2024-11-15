// src/App.jsx
import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loader from './Loader';
import './styles/App.css';
import ProofcoinPage from './pages/Proofcoin';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Socialmedia from './pages/Socialmedia';

// Import pages using dynamic imports
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Roadmap = React.lazy(() => import('./pages/Roadmap'));
const PrivacyPolicy = React.lazy(() => import('./Components/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./Components/TermsOfService'));
const Coins = React.lazy(() => import('./pages/Coins')); 

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="page-container">
      <Loader show={loading} />
      <Header />
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/Proofcoin" element={<ProofcoinPage />} />
            <Route path="/Socialmedia" element={<Socialmedia />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
