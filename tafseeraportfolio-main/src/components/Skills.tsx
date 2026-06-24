import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Palette, Code, BarChart3, Building2, FileSpreadsheet, MessageCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.FCX<{ className?: string }>;
  color: string;
  gradient: string;
}

const skills: Skill[] = [
  {
    name: 'Digital Marketing',
    level: 85,
    icon: TrendingUp,
    color: 'from-primary-500 to-primary-600',
    gradient: 'bg-gradient-primary',
  },
  {
    name: 'Graphic Design',
    level: 80,
    icon: Palette,
    color: 'from-accent-400 to-accent-500',
    gradient: 'bg-gradient-accent',
  },
  {
    name: 'Full Stack Development',
    level: 75,
    icon: Code,
    color: 'from-secondary-500 to-blue-500',
    gradient: 'bg-gradient-secondary',
  },
  {
    name: 'Power BI',
    level: 70,
    icon: BarChart3,
    color: 'from-yellow-500 to-orange-500',
    gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500',
  },
  {
    name: 'Business Strategy',
    level: 90,
    icon: Building2,
    color: 'from-emerald-500 to-teal-500',
    gradient: 'bg-gradient-to-r from-emerald-500 to-teal-500',
  },
  {
    name: 'MS Office',
    level: 95,
    icon: FileSpreadsheet,
    color: 'from-blue-600 to-indigo-600',
    gradient: 'bg-gradient-to-r from-blue-600 to-indigo-600',
  },
  {
    name: 'Communication Skills',
    level: 88,
    icon: MessageCircle,
    color: 'from-pink-500 to-rose-500',
    gradient: 'bg-gradient-to-r from-pink-500 to-rose-500',
  },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      <motion.div
        className="glass-card p-6 rounded-2xl relative overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated border on hover */}
        <motion.div
          className={`absolute inset-0 ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{ transform: 'scale(1.01)', zIndex: -1, filter: 'blur(20px)' }}
        />

        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}>
            <Icon className="w-6 h-6" />
          </div>
          <motion.span
            className="text-2xl font-bold gradient-text"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5, type: 'spring' }}
          >
            {skill.level}%
          </motion.span>
        </div>

        <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
          {skill.name}
        </h3>

        {/* Progress bar */}
        <div className="relative h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
          <motion.div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
          />
          {/* Animated shine */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 1, duration: 1, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full bg-secondary-500/10 dark:bg-secondary-500/20 text-secondary-500 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            My Expertise
          </motion.span>
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Abilities</span>
          </h2>
          <p className="section-subheading">
            A blend of business acumen and technical proficiency
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Also proficient in:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'SEO', 'SEM', 'Social Media Marketing', 'Content Creation',
              'HTML/CSS', 'JavaScript', 'React', 'Data Analysis',
              'Project Management', 'Team Leadership', 'Problem Solving',
            ].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-500 transition-colors duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
