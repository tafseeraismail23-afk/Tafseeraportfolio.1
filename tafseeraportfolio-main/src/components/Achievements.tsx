import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Award, TrendingUp, Star, CheckCircle } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  year: string;
  category: 'academic' | 'certification' | 'skill';
  icon: React.FCX<{ className?: string }>;
}

const achievements: Achievement[] = [
  {
    title: 'BBA Graduation',
    description: 'Successfully completed Bachelor of Business Administration from Karnatak University Dharwad',
    year: '2025',
    category: 'academic',
    icon: GraduationCap,
  },
  {
    title: 'Digital Marketing Certification',
    description: 'Earned professional certification in Digital Marketing strategies and implementation',
    year: '2024',
    category: 'certification',
    icon: Award,
  },
  {
    title: 'Graphics Design Mastery',
    description: 'Completed comprehensive training in graphic design tools and creative visualization',
    year: '2024',
    category: 'certification',
    icon: Trophy,
  },
  {
    title: 'Full Stack Development',
    description: 'Acquired skills in modern web development technologies and frameworks',
    year: '2023',
    category: 'skill',
    icon: TrendingUp,
  },
  {
    title: 'Power BI Analytics',
    description: 'Mastered data visualization and business intelligence using Power BI',
    year: '2023',
    category: 'skill',
    icon: Star,
  },
  {
    title: 'Academic Excellence',
    description: 'Maintained strong academic performance throughout BBA program',
    year: '2022-2025',
    category: 'academic',
    icon: CheckCircle,
  },
];

const categoryColors = {
  academic: 'from-primary-500 to-secondary-500',
  certification: 'from-accent-400 to-pink-500',
  skill: 'from-emerald-500 to-teal-500',
};

const TimelineItem: React.FC<{ achievement: Achievement; index: number; isLeft: boolean }> = ({
  achievement,
  index,
  isLeft,
}) => {
  const Icon = achievement.icon;
  const color = categoryColors[achievement.category];

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className={`relative flex items-center ${isLeft ? 'flex-row-reverse' : ''} gap-8`}
    >
      {/* Content */}
      <motion.div
        className={`w-full md:w-1/2 ${isLeft ? 'text-left pl-8 md:pl-0' : 'text-right pr-8 md:pr-0'}`}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="glass-card p-6 rounded-2xl hover-lift"
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.25)' }}
        >
          {/* Year Badge */}
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${color} text-white mb-3`}>
            {achievement.year}
          </span>

          {/* Icon */}
          <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${color} text-white mb-3 ${isLeft ? 'ml-2' : 'mr-2'}`}>
            <Icon className="w-5 h-5" />
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {achievement.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Timeline node */}
      <motion.div
        className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
      >
        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${color} border-4 border-white dark:border-dark-bg shadow-lg`} />
      </motion.div>

      {/* Empty space for timeline alignment */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-2xl bg-gradient-primary text-white shadow-glow mb-6"
          >
            <Trophy className="w-8 h-8" />
          </motion.div>
          <h2 className="section-heading">
            Achievement <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subheading">
            A journey of continuous learning and growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-400 rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
            transition={{ duration: 1.5 }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <TimelineItem
                key={achievement.title}
                achievement={achievement}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <div className="p-4 rounded-full bg-gradient-hero text-white shadow-glow">
              <Star className="w-6 h-6" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '2025', label: 'Graduation Year', emoji: '🎓' },
            { value: '4', label: 'Certifications', emoji: '📜' },
            { value: '7+', label: 'Technical Skills', emoji: '💡' },
            { value: '3', label: 'Languages', emoji: '🌍' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center hover-lift"
            >
              <span className="text-3xl mb-2 block">{stat.emoji}</span>
              <span className="block text-2xl font-bold gradient-text">{stat.value}</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
