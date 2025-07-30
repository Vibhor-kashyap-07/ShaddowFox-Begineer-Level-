import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/Section';
import { useToast } from '@/components/ui/use-toast';

// Import your project image from src/assets
import project from '@/assets/project.jpg';

function ProjectsSection() {
  const { toast } = useToast();

  const codingProfiles = [
    { name: 'GitHub', url: 'https://github.com/Vibhor-kashyap-07', description: 'My open source contributions and projects.' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/vibhorkashyap07', description: 'Competitive programming journey on Kaggle.' },
    { name: 'GeeksforGeeks', url: '#', description: 'Problem-solving and articles on GFG.' },
    { name: 'LeetCode', url: '#', description: 'Tackling algorithmic challenges on LeetCode.' },
    { name: 'LinkedIn', url: '#', description: 'Aggregated profile of my progress.' },
  ];
  
  const handleProfileClick = (url) => {
    if (url === '#') {
      toast({
        title: "🚧 Link Not Provided",
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
      });
    } else {
      window.open(url, '_blank');
    }
  };

  const handleFeaturedProjectClick = () => {
    toast({
      title: "🚧 Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <Section id="projects">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Projects & <span className="gradient-text">Coding Profiles</span>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">A showcase of my work and my presence on various coding platforms.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {codingProfiles.map((profile, index) => (
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="w-6 h-6"/>
                  {profile.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{profile.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button onClick={() => handleProfileClick(profile.url)} className="w-full">
                  View Profile <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
         <motion.div
            className="md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="h-full flex flex-col bg-secondary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <img className="w-full h-48 object-cover rounded-t-lg" alt="Project Showcase" src={project} />
              <CardHeader>
                <CardTitle>Featured Project</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">A standout project demonstrating key skills and accomplishments. More details coming soon!</p>
              </CardContent>
               <div className="p-6 pt-0">
                <Button onClick={handleFeaturedProjectClick} className="w-full" variant="outline">
                  View Details
                </Button>
              </div>
            </Card>
          </motion.div>
      </div>
    </Section>
  );
}

export default ProjectsSection;