import React from 'react';
import { motion } from 'framer-motion';
import { LanguagesIcon } from 'lucide-react';

interface Language {
  name: string;
  level: string;
  proficiency: number;
  flag: string;
  color: string;
}

const languages: Language[] = [
  {
    name: 'English',
    level: 'Professional Proficiency',
    proficiency: 90,
    flag: '🇬🇧',
    color: 'from-primary-500 to-secondary-500',
  },
  {
    name: 'Kannada',
    level: 'Native Speaker',
    proficiency: 100,
    flag: '🇮🇳',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Hindi',
    level: 'Conversational',
    proficiency: 75,
    flag: '🇮🇳',
    color: 'from-orange-500 to-amber-500',
  },
];

const LanguageCard: React.FC<{ language: Language; index: number }> = ({ language, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
      className="group"
    >
      <motion.div
        className="glass-card p-6 rounded-2xl text-center relative overflow-hidden"
        whileHover={{ y: -10, scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${language.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Flag */}
        <motion.div
          className="relative mb-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
        >
          <span className="text-5xl">{language.flag}</span>
        </motion.div>

        {/* Language name */}
        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
          {language.name}
        </h3>

        {/* Level */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          {language.level}
        </p>

        {/* Circular progress */}
        <div className="relative w-20 h-20 mx-auto">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-gray-200 dark:text-dark-border"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              strokeWidth="4"
              strokeLinecap="round"
              className={`bg-gradient-to-r ${language.color}`}
              style={{ stroke: 'url(#gradient)' }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: language.proficiency / 100 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.5, duration: 1.5, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.8, type: 'spring' }}
          >
            <span className={`text-lg font-bold bg-gradient-to-r ${language.color} bg-clip-text text-transparent`}>
              {language.proficiency}%
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Languages: React.FC = () => {
  return (
    <section id="languages" className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block p-3 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <LanguagesIcon className="w-6 h-6" />
          </motion.span>
          <h2 className="section-heading">
            Language <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="section-subheading">
            Communicating effectively across multiple languages
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {languages.map((lang, index) => (
            <LanguageCard key={lang.name} language={lang} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
