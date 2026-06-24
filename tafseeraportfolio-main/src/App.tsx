import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 grain-overlay">
        {/* Animated Blob Background */}
        <div className="blob-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="blob blob-4" />
        </div>

        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Certifications />
              <Languages />
              <Projects />
              <Achievements />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
