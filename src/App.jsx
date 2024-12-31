import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';
import ProofcoinPage from './pages/Proofcoin';
import Socialmedia from './pages/Socialmedia';
import BackToTopButton from './Components/BackToTopButton';
import ScrollToTop from './Components/ScrollToTop';
import Loading from './Components/Loading';

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
  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <Suspense fallback={<Loading />}>
        <ScrollToTop />
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
        <BackToTopButton />
      </div>
      <Footer />
    </div>
  );
}

export default App;
