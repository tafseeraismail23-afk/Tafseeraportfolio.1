import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  icon: string;
  color: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    name: 'Digital Marketing',
    issuer: 'Certified Professional',
    icon: '📈',
    color: 'from-primary-500 to-secondary-500',
    skills: ['SEO', 'SEM', 'Social Media', 'Content Marketing'],
  },
  {
    name: 'Graphics Design',
    issuer: 'Design Expert',
    icon: '🎨',
    color: 'from-accent-400 to-pink-500',
    skills: ['Adobe Photoshop', 'Illustrator', 'Canva', 'UI/UX'],
  },
  {
    name: 'Full Stack Development',
    issuer: 'Tech Professional',
    icon: '💻',
    color: 'from-secondary-500 to-emerald-500',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
  },
  {
    name: 'Power BI',
    issuer: 'Data Analytics',
    icon: '📊',
    color: 'from-yellow-500 to-orange-500',
    skills: ['Data Visualization', 'DAX', 'Reports', 'Dashboards'],
  },
];

const CertificationCard: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group perspective-1000"
    >
      <motion.div
        className="relative glass-card rounded-2xl overflow-hidden"
        whileHover={{ y: -8, rotateY: 5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient border effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            padding: '2px',
            borderRadius: 'inherit',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
        />

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg`}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl">{cert.icon}</span>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.5 }}
              className="p-2 rounded-full bg-green-500/10 text-green-500"
            >
              <CheckCircle className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
            {cert.name}
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            {cert.issuer}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* View Certificate Link */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-primary-500 font-medium text-sm group/link"
            whileHover={{ x: 5 }}
          >
            View Certificate
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Corner decoration */}
        <motion.div
          className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-r ${cert.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24">

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
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-2xl bg-gradient-accent text-white shadow-glow-accent mb-6"
          >
            <Award className="w-8 h-8" />
          </motion.div>
          <h2 className="section-heading">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading">
            Recognized credentials validating expertise in key areas
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
