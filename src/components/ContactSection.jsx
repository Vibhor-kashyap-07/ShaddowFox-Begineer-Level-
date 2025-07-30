import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Section from '@/components/Section';
import { Mail, Briefcase } from 'lucide-react';
function ContactSection({
  handleContactSubmit
}) {
  return <Section id="contact" className="bg-secondary/50">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <Card className="p-6 h-full">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:kushalvijay.kv@gmail.com" className="text-muted-foreground hover:text-primary">vibhor7668@gmail@gmail.com</a>
              </div>
               <div className="flex items-center gap-4">
                <Briefcase className="w-5 h-5 text-primary" />
                <a href="mailto:kushal.business@gmail.com" className="text-muted-foreground hover:text-primary">thisisvegitoblue@gmail.com</a>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        x: 50
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Your Message" rows="5" required></textarea>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>;
}
export default ContactSection;