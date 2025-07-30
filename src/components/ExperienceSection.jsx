
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Section from '@/components/Section';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: ' Oil and Natural Gas Corporation Limited (ONGC)',
      title: ' Intern',
      duration: 'December 2024 - February 2025',
      description: 'Development of a Large Language Model for Internal Knowledge Retrieval',
      tech: ['Performance Tuning','python', 'Machine Learning', 'NLP', 'LLM', 'Data Analysis', 'Data Visualization'],
    },
    {
      company: ' Oil and Natural Gas Corporation Limited (ONGC)',
      title: 'Intern',
      duration: 'December 2024 - February 2025',
      description: ' Led the development of an Internship Portal for streamlining the internship process.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      company: 'Kaggle',
      title: 'Interactive Document Analysis with Google AI ',
      duration: 'Aug 2020 - April 2021',
      description: 'provides an interactive workflow to analyze PDF documents using the power of embeddings and Google gemini',
      tech: ['Python', 'FAISS', 'Embeddings', 'Google Gemini', 'Document Analysis', 'Data Retrieval'],
    },
    {
      company: 'Shadow Fox',
      title: 'Intern',
      duration: '2025 - Present',
      description: 'led the creation of a personal portfolio website using html,css, and javascript also developed a real life project for a client using React and Node.js',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js','Web Development'],
    },
  ];

  return (
    <Section id="experience" className="bg-secondary/50">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">My journey through the tech industry.</p>
      </div>

      <div className="mt-12 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-full md:w-5/12">
              <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company} • {exp.duration}</CardDescription>
                    </div>
                    <Briefcase className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => <div key={t} className="text-xs bg-background border rounded-full px-2 py-1">{t}</div>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
