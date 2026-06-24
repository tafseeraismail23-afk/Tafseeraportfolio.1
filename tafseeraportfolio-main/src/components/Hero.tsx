import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-700 dark:hover:text-white' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-32 right-1/4 w-4 h-4 bg-primary-500 rounded-full"
        animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-3 h-3 bg-secondary-400 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-2 h-2 bg-accent-400 rounded-full"
        animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl font-medium text-secondary-500 dark:text-secondary-400 mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
            >
              <span className="gradient-text">Tafseera</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8"
            >
              BBA Graduate |{' '}
              <span className="text-primary-500">Business</span>,{' '}
              <span className="text-secondary-500">Marketing</span> &{' '}
              <span className="text-accent-400">Technology</span> Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Passionate BBA graduate with strong interests in business strategy,
              digital marketing, business analytics, and technology-driven solutions.
              Dedicated to combining business knowledge with digital skills to create
              impactful solutions and contribute to organizational growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="/resume.pdf"
                download
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className={`p-3 rounded-full bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm border border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-300 hover:shadow-lg`}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-50"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Profile container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/50 dark:border-dark-border shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-display font-bold text-white">
                    T
                  </span>
                </div>

                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-origin-border"
                  style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 rounded-2xl glass-card shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0 }}
              >
                <span className="text-2xl">🎓</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 p-3 rounded-2xl glass-card shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <span className="text-2xl">💼</span>
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 p-3 rounded-2xl glass-card shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              >
                <span className="text-2xl">📊</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary-500"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
