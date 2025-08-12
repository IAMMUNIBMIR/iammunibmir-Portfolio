import { ArrowUp, Code, Heart, Coffee, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "AWS"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-card to-background border-t border-border/20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand Section */}
            <div className="space-y-6 opacity-0 animate-fade-in-up">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Developer</h3>
                  <p className="text-sm text-muted-foreground">Portfolio</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Crafting digital experiences with modern technologies and a passion for clean, efficient code.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-accent" />
                <span>Made with passion in Canada</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 opacity-0 animate-fade-in-left animate-delay-200">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group hover:translate-x-1 transform transition-transform"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-6 opacity-0 animate-fade-in-right animate-delay-400">
              <h4 className="text-lg font-semibold">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted/50 rounded-full text-xs font-medium border border-border/50 hover:bg-primary/10 hover:border-primary/20 transition-all-smooth hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Coffee className="w-4 h-4" />
                <span>Powered by coffee & determination</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} All rights reserved
              </p>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group flex items-center gap-2 hover:bg-primary/10 hover:border-primary/20"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;