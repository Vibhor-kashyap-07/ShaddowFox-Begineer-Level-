import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Section from '@/components/Section';
import Particles from '@/components/Particles';
import profileImg from '@/assets/profile.jpg';
function HeroSection({
  scrollToSection
}) {
  return <Section id="home" className="min-h-screen flex items-center justify-center !py-0 overflow-hidden">
      <Particles />
      <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }} className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">VIBHOR KASHYAP</h1>
          <h2 className="text-lg md:text-xl text-muted-foreground mt-2">Computer Science Enthusiast I  3rd Year Student at DOON UNIVERSITY Dehradun</h2>
          <p className="mt-6 text-foreground/80 max-w-xl mx-auto md:mx-0">
            "Building knowledge and staying up-to-date with the latest trends and technologies.,<span className="text-primary font-semibold"></span><span className="text-primary font-semibold"></span>"
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Button onClick={() => scrollToSection('contact')}>Get in Touch</Button>
            <Button variant="outline" onClick={() => scrollToSection('projects')}>View Projects</Button>
          </div>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="relative flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl animate-float">
            <img className="w-full h-full object-cover object-top" alt="Vibhor Kashyap" src={profileImg} />
          </div>
        </motion.div>
      </div>
    </Section>;
}
export default HeroSection;