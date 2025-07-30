import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardTitle } from '@/components/ui/card';
import Section from '@/components/Section';

// Import your certificate images from src/assets
import cert1 from '@/assets/certificate1.jpg';
import cert2 from '@/assets/certificate2.jpg';
import cert3 from '@/assets/certificate3.jpg';
import cert4 from '@/assets/certificate4.jpg';
import cert5 from '@/assets/certificate5.jpg';
import cert6 from '@/assets/certificate6.jpg';
import cert7 from '@/assets/certificate7.jpg';
import cert8 from '@/assets/certificate8.jpg';
import cert9 from '@/assets/certificate9.jpg';
import cert10 from '@/assets/certificate10.jpg';

const AwardsSection = () => {
  const awards = [
    { title: 'AI/ML For Geodata Analysis', image: cert1 },
    { title: 'ONGC Internship Certificate', image: cert2 },
    { title: 'Volunteer NSIL 2025', image: cert3 },
    { title: 'Uttarakhand Udyamita Yojna', image: cert4 },
    { title: 'Overview of Geographical Information Systems', image: cert5 },
    { title: 'Kaggle Gen AI Extensive Course', image: cert6 },
    { title: 'Great Learning Front-end Development', image: cert7 },
    { title: 'HP life Introduction to Cyber Security', image: cert8 },
    { title: 'Udemy Mastering c++ Language', image: cert9 },
    { title: 'Udemy Ethically Hack the Planet', image: cert10 },
  ];

  return (
    <Section id="awards">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Awards & <span className="gradient-text">Achievements</span>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          A collection of my professional recognitions and certifications.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="text-center h-full flex flex-col items-center justify-center p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {award.image && (
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-80 object-contain mb-4 rounded shadow"
                />
              )}
              <CardTitle className="text-base font-medium">{award.title}</CardTitle>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default AwardsSection;