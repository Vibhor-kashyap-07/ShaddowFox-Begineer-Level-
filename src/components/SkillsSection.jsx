import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone } from 'lucide-react';

function SkillsSection() {
  const skills = [
    { name: 'React.js', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', level: 80, icon: <Database className="w-5 h-5" /> },
    { name: 'Python', level: 75, icon: <Code className="w-5 h-5" /> },
    { name: 'MongoDB', level: 70, icon: <Database className="w-5 h-5" /> },
    { name: 'React Native', level: 65, icon: <Smartphone className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg text-white mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
              <div className="skill-bar mb-2">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <div className="text-right text-sm text-gray-600">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;