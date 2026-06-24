import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Code2, Database, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'Student Management System',
    description:
      'A comprehensive web application for managing student records, attendance, grades, and academic progress. Features include real-time updates, data visualization, and automated report generation.',
    image: 'https://images.pexels.com/photos/5212702/pexels-photo-5212702.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: '#',
    githubLink: '#',
    color: 'from-primary-500 to-secondary-500',
  },
  {
    title: 'Food Ordering System',
    description:
      'A full-featured food delivery platform with restaurant listings, real-time order tracking, secure payment integration, and user review system. Built with modern technologies for scalability.',
    image: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Stripe'],
    liveLink: '#',
    githubLink: '#',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing skills, projects, and achievements. Features smooth animations, dark mode, and optimized performance for an exceptional user experience.',
    image: 'https://images.pexels.com/photos/5740717/pexels-photo-5740717.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    liveLink: '#',
    githubLink: '#',
    color: 'from-accent-400 to-pink-500',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group"
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl glass-card"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
          />

          {/* Floating icon */}
          <motion.div
            className="absolute top-4 right-4 p-3 rounded-xl bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Folder className="w-5 h-5 text-primary-500" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-gray-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.a
              href={project.liveLink}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-primary text-white font-medium text-sm shadow-glow hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubLink}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900 dark:bg-dark-border text-white font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          </div>
        </div>

        {/* Corner accent */}
        <motion.div
          className={`absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-r ${project.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
        />
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
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
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="inline-flex p-4 rounded-2xl bg-gradient-secondary text-white shadow-lg mb-6"
          >
            <Code2 className="w-7 h-7" />
          </motion.div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Showcasing practical applications of skills and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-500 text-primary-500 font-medium hover:bg-primary-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Database className="w-5 h-5" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
