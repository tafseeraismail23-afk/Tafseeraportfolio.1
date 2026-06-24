import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Briefcase, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative py-24"
    >

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
            className="inline-block px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.span>
          <h2 className="section-heading">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Passionate about combining business knowledge with technology skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image/Illustration side */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                className="glass-card p-8 rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Education Card */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">
                        Education
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        Bachelor of Business Administration (BBA)
                      </p>
                    </div>
                  </div>

                  {/* University */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-secondary text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">
                        University
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Karnatak University Dharwad
                      </p>
                    </div>
                  </div>

                  {/* Year */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-accent text-white">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">
                        Graduation Year
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        2025
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-3xl">📚</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-2xl">🎯</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Professional Introduction */}
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary-500/10 dark:bg-primary-500/20">
                  <Briefcase className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white">
                  Professional Introduction
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a dedicated BBA graduate with a comprehensive understanding
                of business principles and practices. My academic journey has
                equipped me with strong analytical skills, strategic thinking
                capabilities, and a solid foundation in business management. I am
                passionate about leveraging technology to drive business growth
                and create innovative solutions.
              </p>
            </div>

            {/* Career Objectives */}
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary-500/10 dark:bg-secondary-500/20">
                  <Target className="w-5 h-5 text-secondary-500" />
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white">
                  Career Objectives
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My goal is to bridge the gap between business strategy and
                technology implementation. I aspire to work in roles that allow
                me to utilize my skills in digital marketing, business analytics,
                and project management. I am particularly interested in helping
                organizations leverage data-driven insights to make informed
                decisions and achieve their strategic objectives.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Strong Business Acumen', icon: '💡' },
                { label: 'Tech-Savvy Approach', icon: '💻' },
                { label: 'Data-Driven Mindset', icon: '📊' },
                { label: 'Creative Problem Solver', icon: '🎨' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 rounded-xl text-center hover-lift"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
