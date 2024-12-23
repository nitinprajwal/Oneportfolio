import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import FloatingElements from './animations/FloatingElements';

const About = () => {
  const { education, experience } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="about" className="py-20 relative overflow-hidden dark:bg-gray-900">
      <FloatingElements />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="border-l-2 border-blue-600 pl-4"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="border-l-2 border-blue-600 pl-4"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{exp.position}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;