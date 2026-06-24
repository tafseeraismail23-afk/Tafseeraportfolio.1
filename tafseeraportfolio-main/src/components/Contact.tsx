import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Instagram, CheckCircle } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:bg-blue-600' },
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:bg-gray-800' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
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
            className="inline-flex p-4 rounded-2xl bg-gradient-accent text-white shadow-glow-accent mb-6"
          >
            <Mail className="w-7 h-7" />
          </motion.div>
          <h2 className="section-heading">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Let's discuss how I can contribute to your team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <motion.a
                href="mailto:tafseeraismail23@gmail.com"
                className="block glass-card p-6 rounded-2xl hover-lift group"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-primary text-white group-hover:shadow-glow transition-shadow duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-300">
                      tafseeraismail23@gmail.com
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+919380365122"
                className="block glass-card p-6 rounded-2xl hover-lift group"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-secondary text-white shadow-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-medium text-gray-900 dark:text-white group-hover:text-secondary-500 transition-colors duration-300">
                      +91 9380365122
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                className="glass-card p-6 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-accent text-white shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Karnataka, India
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                Connect with me:
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 ${link.color} hover:text-white transition-all duration-300`}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  Available for opportunities
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Open to full-time positions, internships, and freelance projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 rounded-3xl text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-border border ${
                        errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                      } focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 text-gray-900 dark:text-white`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-border border ${
                        errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                      } focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 text-gray-900 dark:text-white`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-border border ${
                        errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                      } focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 text-gray-900 dark:text-white`}
                      placeholder="Opportunity discussion"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-border border ${
                        errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                      } focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 text-gray-900 dark:text-white resize-none`}
                      placeholder="Your message here..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
