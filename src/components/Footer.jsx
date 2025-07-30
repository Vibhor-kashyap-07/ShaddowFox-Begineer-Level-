
import React from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/vibhor-kashyap-a73507211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Vibhor-kashyap-07' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/vibhor_kashyap'},
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/vibhorkashyap07' },
  ];

  return (
    <footer className="bg-background py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
           {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{link.icon}</a>
            ))}
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Vibhor Kashyap. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
