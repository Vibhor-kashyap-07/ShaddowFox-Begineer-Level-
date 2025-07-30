
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import ThemeToggler from '@/components/ThemeToggler';

function Navbar({ isMenuOpen, setIsMenuOpen, scrollToSection, activeSection }) {
  const navLinks = ['about', 'projects', 'experience', 'awards', 'contact'];
  
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/vibhor-kashyap-a73507211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Vibhor-kashyap-07' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/vibhor_kashyap'},
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/vibhorkashyap07' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
           VIBHOR....<span className="gradient-text">.</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors hover:text-primary/80 ${
                  activeSection === item ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{link.icon}</a>
            ))}
            <ThemeToggler />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-sm p-4"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => { scrollToSection(item); setIsMenuOpen(false); }}
                className="capitalize text-lg"
              >
                {item}
              </button>
            ))}
            <div className="flex justify-center gap-4 pt-4">
               {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{link.icon}</a>
              ))}
              <ThemeToggler />
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
