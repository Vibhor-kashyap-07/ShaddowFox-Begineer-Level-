
import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, className, children }) => {
  return (
    <motion.section
      id={id}
      className={`section-padding relative ${className || ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">{children}</div>
    </motion.section>
  );
};

export default Section;
