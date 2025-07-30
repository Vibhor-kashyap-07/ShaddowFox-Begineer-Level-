import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';

// Import your workspace image from src/assets
import workplace3 from '@/assets/workplace3.jpg';

function AboutSection() {
  const skills = [
    'Python', 'C++', 'C language', 'GitHub Copilot','Javascript', 'SQL','React', 'HTML', 'CSS','Machine learning', 'NLP',
  ];

  return (
    <Section id="about" className="bg-secondary/50">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Hi, I’m Vibhor Kashyap, a passionate and driven Computer Science undergraduate from Doon University, Dehradun. I love building practical solutions through technology—whether it’s designing user-friendly web applications or diving into the world of AI and machine learning.
          </p>
          <p className="text-muted-foreground">
            I'm always eager to learn, experiment, and collaborate. Whether it’s LLMOps, generative AI, or front-end design, I thrive at the intersection of innovation and execution. 
          </p>
        </motion.div>
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
          <img 
            className="w-full h-full object-cover"
            alt="Vibhor Kashyap's workspace"
            src={workplace3} />
        </div>
      </motion.div>
    </Section>
  );
}

export default AboutSection;