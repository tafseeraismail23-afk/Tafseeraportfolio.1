import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Github, Twitter, Instagram, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-dark-bg text-white overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-display font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Tafseera
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              BBA Graduate passionate about business strategy, digital marketing,
              and technology-driven solutions. Let's connect and create something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-primary-500 transition-colors duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gray-400 text-sm"
              >
                <Mail className="w-4 h-4 text-primary-500" />
                <a href="mailto:tafseeraismail23@gmail.com" className="hover:text-primary-500 transition-colors">
                  tafseeraismail23@gmail.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-sm"
              >
                Karnataka, India
              </motion.li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Stay updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary-500 outline-none text-sm text-white placeholder-gray-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-primary text-white text-sm font-medium"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center gap-1"
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Tafseera
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm"
          >
            &copy; {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-primary text-white shadow-glow hover:shadow-lg z-40"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
